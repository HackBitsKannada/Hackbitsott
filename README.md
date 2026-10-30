# HACKBITS OTT
*Your Entertainment. Your Platform.* — by HackbitsKannada

Monorepo for an OTT platform: Android app, responsive website, admin dashboard, Supabase backend.
Only **licensed / original / public-domain** content is supported.

## Status
Phase 1 (scaffold + architecture) only. Auth, database, catalogue, admin and playback are **not implemented yet**. See `docs/architecture.md`.

## Structure
```
android/   Kotlin + Jetpack Compose app
web/       Next.js website (port 3000)
admin/     Next.js admin dashboard (port 3001)
supabase/  migrations, edge functions, seed
shared/    shared TS types + constants
docs/      architecture, database, deployment, security
```

## Getting started (GitHub Codespaces)
1. Create an empty GitHub repo `hackbits-ott`, upload/push this folder to it.
2. Repo → **Code → Codespaces → Create codespace on main** (Node 22 + `npm install` run automatically).
3. `cp .env.example .env.local` and later fill Supabase values (Phase 2).
4. Run:
   ```bash
   npm run dev:web      # http://localhost:3000
   npm run dev:admin    # http://localhost:3001
   npm run typecheck
   ```
5. Smoke test: open `/api/health` on each app — expect `{"status":"ok"}`.

## Android
Open the `android/` folder in Android Studio (Koala or newer, JDK 17). Studio generates the Gradle wrapper scripts and syncs. Create `android/local.properties` with:
```
supabase.url=https://YOUR-REF.supabase.co
supabase.anonKey=YOUR-ANON-KEY
```
Run on a device/emulator. Never put the service-role key here.
