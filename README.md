# Adaptix-Docs

Founder OS API reference site. Aggregates `/openapi.json` from every Adaptix-\*
service in the polyrepo into one cinematic, mission-control docs surface.

Canonical home: **https://docs.adaptixcore.com** (S3 + CloudFront, provisioned in
Adaptix-Infra Terraform).

## What it does

- Pulls `https://api.adaptixcore.com/api/v1/{service}/openapi.json` for every
  service listed in [`services.yaml`](./services.yaml).
- Pulls `https://api.adaptixcore.com/api/v1/{service}/cortex/tools` for the
  Adaptix Cortex tool registry index.
- Renders a service grid (grouped by domain), a per-service endpoint reference,
  and a Cortex tool registry page.
- Health badge per service: `live` / `deferred` (last-known-good) / `unavailable`.

No mocks anywhere. If a service is down, the site says so. If a spec has never
been fetched, the service shows as `unavailable` — it does not invent endpoints.

## Quick start (founder)

```bash
cd Adaptix-Docs
npm install
npm run aggregate    # pulls live OpenAPI from api.adaptixcore.com
npm run dev          # http://localhost:4321
```

To build for deploy:

```bash
npm run build        # writes ./dist
```

## Add a service

Append to [`services.yaml`](./services.yaml). The aggregator and landing page
pick it up automatically on the next run.

```yaml
services:
  - slug: new-thing
    name: New Thing
    repo: Adaptix-New-Thing-Service
    description: One-line, founder-readable.
    domain: platform
```

Allowed domains today: `platform`, `revenue`, `clinical`, `operations`, `people`,
`logistics`, `business`, `founder`.

## How aggregation works

`scripts/aggregate-openapi.mjs` walks every service in `services.yaml`, fetches
its OpenAPI document with a 5-second timeout, and writes the result to
`public/api/{slug}.openapi.json`. Combined health goes into
`public/api/index.json`.

- HTTP 200 + valid OpenAPI → `live`, spec on disk is refreshed.
- HTTP 4xx/5xx, timeout, or invalid JSON → `deferred` if a prior spec exists,
  `unavailable` otherwise. Prior spec is preserved on disk untouched.

`scripts/aggregate-cortex.mjs` does the same for `/cortex/tools`. Services that
haven't shipped the registry yet are recorded as `not_exposed` — never faked.

## CI

`.github/workflows/aggregate-openapi.yml` runs nightly at 09:00 UTC and on every
push to `main`. On scheduled runs it commits the refreshed cache back to `main`,
then builds the site and uploads `dist/` as an artifact.

The S3 + CloudFront deploy (under `docs.adaptixcore.com`) lives in Adaptix-Infra
Terraform and is intentionally out of scope for this repo — when that lands,
swap the artifact upload for an `aws s3 sync` step.

## Naming rules

- **Adaptix Cortex** is the AI everywhere user-facing. Never "AI", "Copilot",
  "Bedrock", or "Assistant".
- **Founder OS** is the cross-domain command center.
- Mono numerals, glassmorphism cards, `#050608` background, `#ff6b35` accent.
- Mission-control look — never SaaS.
