export const STORAGE_KEYS = [
  'is_onboarding_completed',
  'saved_places',
] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
