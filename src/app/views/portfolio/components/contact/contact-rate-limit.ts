const SEND_LIMIT = 2;
const SEND_WINDOW_MS = 24 * 60 * 60 * 1000;

export function checkContactRateLimit(stored: string | null, now: number): {
  allowed: boolean;
  recentAttempts: number[];
} {
  if (!stored) {
    return { allowed: true, recentAttempts: [] };
  }

  const parsed: unknown = JSON.parse(stored);
  if (!Array.isArray(parsed) || !parsed.every((value) => typeof value === 'number' && Number.isFinite(value))) {
    throw new Error('Invalid contact form rate-limit data');
  }

  const recentAttempts = parsed.filter(
    (timestamp) => timestamp <= now && now - timestamp < SEND_WINDOW_MS,
  );
  return { allowed: recentAttempts.length < SEND_LIMIT, recentAttempts };
}
