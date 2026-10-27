# CrowdQuest

Twitch chat solves timed questions together using one verified first vote per viewer.

Built for [Codex x TwitchCon Hackathon](https://twitchcon-codex.devpost.com/).

## Run and verify

Node 24 is required. Run `npm ci`, configure .env.local from .env.example, apply `npm run db:migrate` to this product’s own Postgres database, and run `npm run check`. Deploy this Next.js root to Vercel with npm run build.

Open / for the product, /access for signed workspace access and /history for saved work. /api/health reports configuration only; it is not proof of a successful provider call.

## Backend

Twitch EventSub signed webhooks, Postgres deduplication, browser overlay.

Use a dedicated database, random SESSION_SECRET and CRON_SECRET of at least 32 characters, long independent access codes, and the exact HTTPS APP_ORIGIN. Never expose provider keys to the browser. The daily Vercel cleanup cron deletes expired 24-hour run records. Provider-side retention is separate.

This is controlled hackathon workspace access. Consumer-account recovery, general multi-tenant identity, operating budgets, backups and provider terms must be resolved before a broad public launch.

## Entry requirements and current status

New work in event period, actual Twitch flow, source, genuine Codex session ID and video under three minutes. No session ID has been invented.

Source is prepared and independently verified as recorded in verification.json when present. Vercel hosting is deployed at https://crowdquest-devpost-2026.vercel.app. Dedicated Neon storage is provisioned and live-tested. Sponsor proof where required, eligibility checks, video and final submission remain pending. Hosting does not establish production readiness. Repository: https://github.com/code-up-matrix/crowdquest-devpost-2026.

## Attribution

MIT-licensed. Product implementation was prepared with ChatGPT/Codex assistance on 27 October 2026. Shared foundation: code-up-matrix/axios-fx-compliance-agent, commit 4093cf1. The authored product and shared infrastructure must be disclosed accurately in the event submission.

## Live database verification

19 live assertions passed on 27 October 2026: protected workspace login, database history isolation, expired-record cleanup and logout. The sponsor route correctly reports its missing credential; real provider output is still pending. See [backend evidence](docs/BACKEND-VERIFICATION.md) and [machine-readable results](live-backend-verification.json). Database credentials are stored in Vercel's sensitive environment variables.
