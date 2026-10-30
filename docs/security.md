# Security principles
1. `SUPABASE_SERVICE_ROLE_KEY` and `PLAYBACK_TOKEN_SECRET` exist only in server environments (admin server code, Edge Functions). Never in `web/` client code or Android.
2. Only `NEXT_PUBLIC_*` values may reach browsers; they are safe only because RLS is enabled.
3. Authorization is enforced server-side and by RLS, never by hiding UI.
4. Public reads: published **and** licensed content only. Users touch only their own profile, watchlist, history.
5. Content managers cannot alter super-admin permissions.
6. Playback requires a short-lived, license- and territory-checked session.
7. No DRM bypass, scraping, or unlicensed rehosting — demo mode uses public-domain/original media only.
8. `.env`, keystores and `local.properties` are git-ignored.

Implementation of RLS, rate limiting and audit logs arrives in Phases 2–3; this document will list the actual policies.
