# iOS MDM Setup

This document walks the founder through the one-time and annual
credential operations required to make Adaptix's iOS MDM stack fully
operational. The stack ships as code at `MERGED_TO_MAIN`; reaching
`RUNTIME_VERIFIED` requires the four founder-only steps below.

## Architecture

```
Adaptix-Web-App (/crewlink/ios-mdm)
        |
        v
Adaptix-Device-Service
   /api/v1/device/ios-mdm/*
        |
        v
NanoMDM sidecar (internal ECS, MIT license)
        |
        v
Apple APNs + Apple Business Manager + iOS device
```

Adaptix-Device-Service owns RBAC, tenant isolation, audit, and the
operator UI. NanoMDM is a thin protocol engine that speaks Apple's MDM
wire format. The split keeps Adaptix in control of every business
decision while reusing the proven open-source implementation of the
Apple MDM protocol.

## What this avoids

- No third-party MDM SaaS dependency.
- No per-device monthly fee.
- Total infrastructure cost: approximately 30 USD / month for ECS +
  Secrets Manager + S3 + ALB share (vs roughly 5 USD / device / month
  for vendor SaaS).
- Apple Developer Program fee of 99 USD / year is the only mandatory
  external cost.

---

## 1. One-time: Apple MDM Push Certificate

The Apple MDM Push Certificate authorizes Adaptix to send commands to
iOS devices through Apple Push Notification service (APNs). It is
required before any iOS command can be issued.

### 1.1 Generate the CSR

NanoMDM emits the certificate signing request the first time it starts.
After the Terraform module applies and the ECS service stabilizes,
download the CSR:

```bash
aws s3 cp \
  s3://adaptix-nanomdm-state-<account_id>-production/csr/nanomdm.csr \
  ./nanomdm.csr
```

### 1.2 Sign at developer.apple.com

1. Sign in to `developer.apple.com` with the Adaptix Apple Developer
   account.
2. Navigate to Certificates, Identifiers, and Profiles.
3. Select Certificates and click the + button.
4. Choose Services and then Apple MDM CSR.
5. Upload `nanomdm.csr`.
6. Download the resulting `.pem` file.

Apple returns a vendor-signed CSR, not the final push certificate. Move
to step 1.3.

### 1.3 Exchange the vendor-signed CSR for the push certificate

1. Sign in to `identity.apple.com/pushcert` with the **business**
   Apple ID used for the Adaptix Apple Business Manager account.
2. Click Create a Certificate.
3. Upload the vendor-signed CSR from step 1.2.
4. Download the final `.pem` certificate.

### 1.4 Populate the Secrets Manager entry

Build the JSON payload Adaptix expects:

```json
{
  "certificate_pem": "-----BEGIN CERTIFICATE-----\n...",
  "private_key_pem": "-----BEGIN PRIVATE KEY-----\n...",
  "topic": "com.apple.mgmt.External.<uuid>",
  "not_after": "2027-06-02T00:00:00Z"
}
```

The `topic` value is the `UID=` field inside the certificate subject;
read it with `openssl x509 -in cert.pem -noout -subject`.

Upload:

```bash
aws secretsmanager put-secret-value \
  --secret-id adaptix/production/mobile/ios/apple-mdm-push-cert \
  --secret-string file://push-cert.json
```

Adaptix-Device-Service now returns 200 on iOS commands. Before this
step it returns 503 with `required_configuration: ["apple-mdm-push-cert"]`.

---

## 2. One-time: Apple Business Manager + DEP

Apple Business Manager is required for zero-touch device enrollment.
Without it, devices must be manually enrolled per the operator UI; with
it, devices auto-enroll on first activation.

### 2.1 Enroll the agency in Apple Business Manager

1. Open `business.apple.com`.
2. Sign in with the business Apple ID for the agency.
3. Complete the agency verification flow (Apple emails a verifier).
4. Once verified, the agency administrator has full access.

### 2.2 Register Adaptix as the MDM server

1. In Apple Business Manager, choose Preferences, then Your MDM Servers.
2. Add MDM Server, name it `Adaptix`.
3. Upload the public key NanoMDM exposes at
   `https://<adaptix-device-service>/api/v1/device/ios-mdm/dep/public-key`.
4. Download the resulting server token (a `.p7m` file).
5. Wrap it as JSON and upload:

```bash
jq -n --arg t "$(base64 -i token.p7m)" '{server_token: $t}' \
  | aws secretsmanager put-secret-value \
      --secret-id adaptix/production/mobile/ios/apple-business-manager-token \
      --secret-string file:///dev/stdin
```

### 2.3 Assign devices to the Adaptix MDM server

In Apple Business Manager, choose Devices, select the iOS devices the
agency owns, and assign them to the Adaptix MDM server. Devices appear
in Adaptix's `/crewlink/ios-mdm` page under "Awaiting Tenant Assignment"
within the next DEP sync (manual button on the page, or scheduled hourly
once cron is enabled).

### 2.4 Bind a DEP device to a tenant

In `/crewlink/ios-mdm`, click a serial in the "Awaiting Tenant
Assignment" board and choose the agency tenant. Next time the device
wipes and activates, it auto-enrolls in Adaptix with the assigned
profile applied.

---

## 3. Annual: rotate the Apple MDM Push Certificate

Apple expires the push certificate every 365 days. Adaptix marks the
certificate `not_after` when it loads and refuses to use an expired
cert (returns 503).

### 3.1 Calendar reminder

The 365-day expiry is rigid. Set a recurring calendar reminder at
day 330 to begin the renewal walkthrough below.

### 3.2 Renewal walkthrough

1. Sign in to `identity.apple.com/pushcert`.
2. Locate the existing Adaptix certificate.
3. Click Renew.
4. Re-upload the same vendor-signed CSR.
5. Download the renewed `.pem` certificate.
6. Re-run the JSON build from section 1.4 with the renewed `pem` plus
   the new `not_after` value.
7. `aws secretsmanager put-secret-value ...` (the existing secret name
   is reused; the new value automatically supersedes).

ECS does not need a redeploy. NanoMDM fetches the secret per command.

---

## 4. Verify the integration

After populating both secrets, exercise the full stack:

1. Open `/crewlink/ios-mdm`.
2. Confirm the configuration banners are absent (no 503 surface).
3. Click `Sync Apple Business Manager`. Devices appear in the DEP
   board.
4. Assign a serial to a tenant.
5. Wipe + activate the device. It auto-enrolls.
6. Create a configuration profile (Wi-Fi + restrictions).
7. Click `Push to N iOS devices`. The profile installs silently.
8. Issue an iOS command (Lock) and confirm the device locks within a
   few seconds.

At step 8 the iOS MDM stack is `RUNTIME_VERIFIED`.

---

## 5. Reference: relevant secrets

| Name | Purpose | Founder generates from |
|---|---|---|
| `adaptix/production/mobile/ios/apple-mdm-push-cert` | APNs delivery | developer.apple.com + identity.apple.com/pushcert |
| `adaptix/production/mobile/ios/apple-business-manager-token` | DEP auto-enroll | business.apple.com |
| `adaptix/production/mobile/ios/scep-ca-cert` | Device certificate issuance | NanoMDM auto-generates on first boot |

All three are KMS-encrypted, IAM-scoped to the NanoMDM task role
exclusively, and never logged by Adaptix-Device-Service.
