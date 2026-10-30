import type {
  ADMIN_ROLES, AGE_RATINGS, CONTENT_STATUSES, LANGUAGES, LICENSE_STATUSES, PLATFORMS,
} from "../constants";

export type LanguageCode = (typeof LANGUAGES)[number]["code"];
export type AgeRating = (typeof AGE_RATINGS)[number];
export type ContentStatus = (typeof CONTENT_STATUSES)[number];
export type LicenseStatus = (typeof LICENSE_STATUSES)[number];
export type Platform = (typeof PLATFORMS)[number];
export type AdminRole = (typeof ADMIN_ROLES)[number];

type UUID = string;
type ISODate = string;

export interface Genre { id: UUID; name: string; slug: string }

export interface Movie {
  id: UUID;
  slug: string;
  title: string;
  description: string | null;
  release_year: number | null;
  duration_minutes: number | null;
  language: LanguageCode;
  age_rating: AgeRating | null;
  cast_members: string[];
  director: string | null;
  poster_url: string | null;
  backdrop_url: string | null;
  trailer_url: string | null;
  status: ContentStatus;
  created_at: ISODate;
  updated_at: ISODate;
}

export interface Series extends Omit<Movie, "duration_minutes" | "director"> {
  creator: string | null;
}

export interface Season { id: UUID; series_id: UUID; season_number: number; title: string | null }

export interface Episode {
  id: UUID;
  season_id: UUID;
  episode_number: number;
  title: string;
  description: string | null;
  duration_minutes: number | null;
  thumbnail_url: string | null;
  status: ContentStatus;
}

export interface Subtitle { id: UUID; language: LanguageCode; label: string; url: string }

export interface WatchProgress {
  content_type: "movie" | "episode";
  content_id: UUID;
  position_seconds: number;
  duration_seconds: number;
  completed: boolean;
  updated_at: ISODate;
}

/** Paginated list envelope used by every list endpoint. */
export interface Page<T> { items: T[]; page: number; page_size: number; total: number }

// ---- Playback authorization contract (Edge Function: authorize-playback) ----
export interface PlaybackAuthRequest {
  content_type: "movie" | "episode";
  content_id: UUID;
  platform: Platform;
}

export type PlaybackDenyReason =
  | "not_authenticated" | "not_published" | "no_license"
  | "license_expired" | "territory_blocked" | "platform_blocked" | "account_suspended";

export type PlaybackAuthResponse =
  | {
      allowed: true;
      session_id: UUID;
      manifest_url: string;       // HLS (.m3u8) URL from the licensed provider
      expires_at: ISODate;        // short-lived; client must re-authorize after this
      drm?: { scheme: "widevine" | "fairplay" | "playready"; license_url: string };
      subtitles: Subtitle[];
      resume_position_seconds: number;
    }
  | { allowed: false; reason: PlaybackDenyReason };
