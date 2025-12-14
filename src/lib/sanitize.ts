import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitizes HTML content to prevent XSS attacks
 * Allows safe HTML elements while removing potentially malicious scripts
 */
export function sanitizeHtml(html: string): string {
  if (!html) return '';

  // Add a hook to block data URLs explicitly
  DOMPurify.addHook('uponSanitizeAttribute', (node, data) => {
    // Block data: URLs in src and href attributes
    if (data.attrName === 'src' || data.attrName === 'href') {
      if (data.attrValue && data.attrValue.toLowerCase().startsWith('data:')) {
        data.keepAttr = false;
      }
    }
  });

  const sanitized = DOMPurify.sanitize(html, {
    // Allow common formatting and content elements
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 's', 'b', 'i',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'blockquote', 'pre', 'code',
      'a', 'img',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'div', 'span',
    ],
    ALLOWED_ATTR: [
      'href', 'target', 'rel',
      'src', 'alt', 'width', 'height',
      'class', 'style',
    ],
    // Additional security options
    ALLOW_DATA_ATTR: false,
    ALLOW_UNKNOWN_PROTOCOLS: false,
    SAFE_FOR_TEMPLATES: true,
    // Strict URL validation - only allow http(s), mailto, tel
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  });

  // Remove the hook after use to avoid side effects
  DOMPurify.removeAllHooks();

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

