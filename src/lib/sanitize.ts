/**
 * Sanitizes HTML content to prevent XSS attacks
 * Uses a simple regex-based approach for edge compatibility
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
  
  // Remove data: URLs (potential XSS vector)
  sanitized = sanitized.replace(/data:text\/html/gi, '');
  sanitized = sanitized.replace(/src\s*=\s*["']data:/gi, 'src="');
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
 * Sanitizes plain text by escaping HTML entities
 * Use this for content that should NOT contain any HTML
 */
export function sanitizeText(text: string): string {
  if (!text) return '';
  
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}


