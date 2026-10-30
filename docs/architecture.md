# HACKBITS OTT — Architecture

## Overview
Three clients share **one Supabase backend**. No client holds privileged credentials.

```
 Android (Compose + Media3) ─┐
 Website  (Next.js)         ─┼─► Supabase Auth + Postgres (RLS) + Storage
 Admin    (Next.js, server) ─┘          │
                                        └─► Edge Functions ─► licensed video provider (HLS/DRM)
```

## Components
| Component | Tech | Talks to backend with |
|---|---|---|
| `android/` | Kotlin, Compose, Material 3, Media3 | anon key + user JWT (RLS enforced) |
| `web/` | Next.js 14, TypeScript, Tailwind | anon key + user JWT (RLS enforced) |
| `admin/` | Next.js 14, server-side checks | user JWT; service role **only in server code** |
| `supabase/` | Postgres, RLS, Edge Functions | — |
| `shared/` | TypeScript types + constants | imported by web/admin; mirrored by hand in Kotlin |

## Playback flow (built in Phases 2 and 7)
1. Client calls Edge Function `authorize-playback` with `{content_type, content_id, platform}` (contract in `shared/types`).
2. Function verifies: JWT valid → account not suspended → content published → active license → not expired → country allowed → platform allowed.
3. On success it records a `playback_sessions` row and returns a short-lived manifest reference (TTL `PLAYBACK_TOKEN_TTL_SECONDS`).
4. Player re-authorizes when the session expires. Progress is saved to `watch_history`.

## Provider-independent video layer
The function returns a standard HLS manifest URL (+ optional DRM info). Swapping providers changes only the Edge Function adapter, not the clients. `VIDEO_PROVIDER=demo` serves public-domain sample streams.

## Decisions
- **Next.js 14 + Tailwind 3**: stable, well-documented; Cloudflare Pages deployment is handled in Phase 9.
- **npm workspaces**: one `npm install` for web + admin + shared.
- **Android config via `local.properties`**: keeps URLs/keys out of Git.
- **Types**: `shared/` is the source of truth; Android models are written by hand to match it (no codegen yet).

## Phase status
| Phase | Status |
|---|---|
| 1 Init + architecture | Scaffolded (this commit) |
| 2–9 | Not started |
