// In-memory sliding window rate limiter — voldoende voor single-server (PM2, één proces).
// Bij meerdere instanties vervangen door een gedeelde store (Redis).

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (entry.timestamps.length === 0 || now - entry.timestamps[entry.timestamps.length - 1] > 3600_000) {
      store.delete(key);
    }
  }
}, CLEANUP_INTERVAL_MS).unref?.();

export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = store.get(key) ?? { timestamps: [] };
  entry.timestamps = entry.timestamps.filter((ts) => ts > now - windowMs);

  if (entry.timestamps.length >= limit) {
    store.set(key, entry);
    return false;
  }

  entry.timestamps.push(now);
  store.set(key, entry);
  return true;
}
