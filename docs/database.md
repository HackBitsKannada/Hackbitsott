# Database (planned — implemented in Phase 2)
Tables: profiles, movies, series, seasons, episodes, genres, movie_genres, series_genres, watchlist, watch_history, subtitles, banners, licenses, admin_roles, playback_sessions, user_reports, admin_activity_logs.

Conventions: UUID PKs, `created_at`/`updated_at`, FK cascades, CHECK constraints, GIN full-text index for search, keyset/offset pagination. RLS enabled on every table (Phase 3).
No SQL exists yet; this file will be updated with the real schema.
