import { z } from 'zod';

/**
 * Common validation schemas and utilities for security
 */

// Email validation - strict pattern
export const emailSchema = z
  .string()
  .email('Invalid email format')
  .max(254, 'Email too long')
  .toLowerCase()
  .trim();

// Password validation - stronger requirements
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .max(128, 'Password too long')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  );

// Name validation - allows letters, spaces, hyphens, apostrophes, commas, and periods for credentials
export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name too long')
  .trim()
  .regex(/^[a-zA-ZÀ-ÿ\s'\-,.]+$/, 'Name contains invalid characters');

// Phone validation - allows international formats
export const phoneSchema = z
  .string()
  .min(6, 'Phone number too short')
  .max(20, 'Phone number too long')
  .regex(/^[\d\s+\-().]+$/, 'Invalid phone format');

// Slug validation - URL-safe strings
export const slugSchema = z
  .string()
  .min(3, 'Slug must be at least 3 characters')
  .max(100, 'Slug too long')
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    'Slug must be lowercase alphanumeric with hyphens only'
  );

// Blog post title validation - allows any characters including French special chars
export const titleSchema = z
  .string()
  .min(3, 'Title must be at least 3 characters')
  .max(200, 'Title too long')
  .trim();

// Generic text content - prevents excessively long content
export const contentSchema = z
  .string()
  .min(1, 'Content is required')
  .max(100000, 'Content too long'); // ~100KB limit

// URL validation
export const urlSchema = z
  .string()
  .url('Invalid URL format')
  .max(2048, 'URL too long')
  .refine(
    (url) => url.startsWith('https://') || url.startsWith('http://'),
    'URL must start with http:// or https://'
  );

// Image URL validation - more permissive for CDNs
export const imageUrlSchema = z
  .string()
  .max(2048, 'URL too long')
  .refine(
    (url) =>
      url.startsWith('https://') ||
      url.startsWith('http://') ||
      url.startsWith('/'),
    'Invalid image URL'
  );

// Contact form validation schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  service: z.string().max(100).trim().optional(),
  details: z.string().max(5000, 'Details too long').trim().optional(),
  formType: z.enum(['consultation', 'service', 'job', 'partnership']).optional(),
  serviceName: z.string().max(100).trim().optional(),
  fileName: z.string().max(255).optional(),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: emailSchema,
});

// Login schema
export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required').max(128),
});

// Admin user creation schema
export const adminUserSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

// Blog post validation schema
export const blogPostSchema = z.object({
  slug: slugSchema,
  title: titleSchema,
  excerpt: z.string().min(10).max(500).trim(),
  author: nameSchema,
  authorRole: z.string().min(2).max(100).trim(),
  authorBio: z.string().min(10).max(500).trim(),
  publishDate: z.string().datetime().optional(),
  readTime: z.string().max(20).trim(),
  image: imageUrlSchema,
  category: z.string().min(2).max(50).trim(),
  content: contentSchema,
  tags: z.array(z.string().max(50).trim()).max(20).optional(),
  featured: z.boolean().optional(),
  published: z.boolean().optional(),
});

// Blog post update schema - all fields optional
export const blogPostUpdateSchema = blogPostSchema.partial();

/**
 * Safely parse and validate data, returning typed result
 */
export function validateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: string } {
  try {
    const result = schema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const messages = error.issues.map((e) => e.message).join(", ");
      return { success: false, error: messages };
    }
    return { success: false, error: 'Validation failed' };
  }
}

/**
 * Sanitize filename to prevent path traversal attacks
 */
export function sanitizeFilename(filename: string): string {
  return filename
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/\.{2,}/g, '.')
    .substring(0, 255);
}

/**
 * List of allowed image MIME types
 */
export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
] as const;

/**
 * Maximum file size in bytes (5MB)
 */
export const MAX_FILE_SIZE = 5 * 1024 * 1024;

/**
 * Validate uploaded file
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }

  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: 'File size exceeds 5MB limit' };
  }

  if (!ALLOWED_IMAGE_TYPES.includes(file.type as typeof ALLOWED_IMAGE_TYPES[number])) {
    return {
      valid: false,
      error: 'Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG',
    };
  }

  return { valid: true };
}


