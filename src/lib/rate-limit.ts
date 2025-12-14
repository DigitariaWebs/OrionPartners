/**
 * Simple in-memory rate limiter for API routes
 * For production with multiple instances, consider using Redis-based rate limiting
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 60000); // Clean every minute

export interface RateLimitConfig {
  /** Maximum number of requests allowed in the time window */
  maxRequests: number;
  /** Time window in milliseconds */
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier for the client (e.g., IP address)
 * @param config - Rate limit configuration
 * @returns Rate limit result
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const key = identifier;
  
  let entry = rateLimitStore.get(key);
  
  // If no entry or window has expired, create new entry
  if (!entry || entry.resetTime < now) {
    entry = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    rateLimitStore.set(key, entry);
    
    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      resetTime: entry.resetTime,
    };
  }
  
  // Increment count
  entry.count++;
  
  // Check if rate limit exceeded
  if (entry.count > config.maxRequests) {
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }
  
  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * Get client IP from Next.js request
 */
export function getClientIp(request: Request): string {
  // Try to get the real IP from various headers
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwardedFor.split(',')[0].trim();
  }
  
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }
  
  // Fallback to a default identifier
  return 'unknown';
}

// Preset configurations for common use cases
export const RATE_LIMITS = {
  // Strict limit for login attempts - 5 attempts per 15 minutes
  login: {
    maxRequests: 5,
    windowMs: 15 * 60 * 1000,
  },
  // Moderate limit for contact forms - 3 per minute
  contact: {
    maxRequests: 3,
    windowMs: 60 * 1000,
  },
  // Newsletter signup - 2 per minute
  newsletter: {
    maxRequests: 2,
    windowMs: 60 * 1000,
  },
  // File uploads - 10 per minute
  upload: {
    maxRequests: 10,
    windowMs: 60 * 1000,
  },
  // General API - 100 per minute
  api: {
    maxRequests: 100,
    windowMs: 60 * 1000,
  },
  // Admin actions - 30 per minute
  admin: {
    maxRequests: 30,
    windowMs: 60 * 1000,
  },
} as const;

