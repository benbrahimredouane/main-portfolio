import { describe, expect, it } from 'vitest';
import { checkContactRateLimit } from './contact-rate-limit';

describe('checkContactRateLimit', () => {
  it('blocks a third attempt within the rolling 24-hour window', () => {
    const now = 1_800_000_000_000;
    const attempts = [now - 60_000, now - 1_000];

    expect(checkContactRateLimit(JSON.stringify(attempts), now)).toEqual({
      allowed: false,
      recentAttempts: attempts,
    });
  });

  it('allows a new attempt once an earlier attempt falls outside the window', () => {
    const now = 1_800_000_000_000;
    const attempts = [now - 24 * 60 * 60 * 1000, now - 1_000];

    expect(checkContactRateLimit(JSON.stringify(attempts), now)).toEqual({
      allowed: true,
      recentAttempts: [now - 1_000],
    });
  });

  it('rejects malformed stored rate-limit data', () => {
    expect(() => checkContactRateLimit('not-json', Date.now())).toThrow();
  });
});
