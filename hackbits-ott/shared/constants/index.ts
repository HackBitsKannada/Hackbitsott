/** Brand + design tokens shared by web, admin (and mirrored in Android Color.kt). */
export const BRAND = {
  name: "HACKBITS OTT",
  creator: "HackbitsKannada",
  tagline: "Your Entertainment. Your Platform.",
} as const;

export const COLORS = {
  background: "#080A0F",
  surface: "#121722",
  card: "#191F2B",
  primary: "#8B5CF6",
  secondary: "#06B6D4",
  text: "#FFFFFF",
  textMuted: "#A1A1AA",
} as const;

export const LANGUAGES = [
  { code: "kn", label: "Kannada" },
  { code: "hi", label: "Hindi" },
  { code: "en", label: "English" },
  { code: "te", label: "Telugu" },
  { code: "ta", label: "Tamil" },
] as const;

export const AGE_RATINGS = ["U", "UA7+", "UA13+", "UA16+", "A"] as const;

export const CONTENT_STATUSES = ["draft", "published", "archived"] as const;
export const LICENSE_STATUSES = ["active", "expired", "suspended", "pending"] as const;
export const PLATFORMS = ["android", "web"] as const;
export const ADMIN_ROLES = ["super_admin", "admin", "content_manager"] as const;

/** Lifetime of a playback authorization token. Keep short; the player refreshes it. */
export const PLAYBACK_TOKEN_TTL_SECONDS = 300;
export const DEFAULT_PAGE_SIZE = 24;
export const MAX_PAGE_SIZE = 60;
