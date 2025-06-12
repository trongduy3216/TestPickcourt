export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const AUTH_ENABLED = process.env.NEXT_PUBLIC_AUTH_ENABLED === "true";

export const PUBLIC_APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "PickCourt";

export const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE || "vi";
