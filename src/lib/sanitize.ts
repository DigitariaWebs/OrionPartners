/**
 * Sanitizes HTML content to prevent XSS attacks
 * Uses a simple regex-based approach for edge compatibility
 * Preserves legitimate special characters and formatting
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';

  // Remove script tags and their contents
  let sanitized = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove event handlers (onclick, onerror, onload, etc.)
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
  sanitized = sanitized.replace(/\s*on\w+\s*=\s*[^\s>]*/gi, '');
  
  // Remove javascript: protocol
  sanitized = sanitized.replace(/javascript:/gi, '');
  
  // Remove data: URLs (potential XSS vector) but allow data:image for inline images
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  sanitized = sanitized.replace(/src\s*=\s*["']data:(?!image)/gi, 'src="');
  sanitized = sanitized.replace(/href\s*=\s*["']data:/gi, 'href="');
  
  // Remove iframe, embed, object tags
  sanitized = sanitized.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  sanitized = sanitized.replace(/<embed\b[^>]*>/gi, '');
  sanitized = sanitized.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
  
  // Remove style tags with potentially malicious content
  sanitized = sanitized.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Remove base tags (can be used for XSS)
  sanitized = sanitized.replace(/<base\b[^>]*>/gi, '');
  
  // Remove meta refresh tags
  sanitized = sanitized.replace(/<meta\b[^>]*http-equiv\s*=\s*["']?refresh["']?[^>]*>/gi, '');

  return sanitized;
}

/**
 * Sanitizes plain text fields without escaping special characters
 * Use this for content that should NOT contain HTML but may have accents, quotes, etc.
 * Only trims whitespace and validates max length
 */
export function sanitizeText(text: string, maxLength: number = 10000): string {
  if (!text) return '';
  
  // Just trim whitespace and enforce max length
  // This preserves all special characters like é, à, ô, etc.
  return text.trim().slice(0, maxLength);
}


