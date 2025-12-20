'use client';

import { useEffect } from 'react';

const CspHead = () => {
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "media-src *; font-src 'self' https://r2cdn.perplexity.ai;";
    document.head.appendChild(meta);
  }, []);

  return null;
};

export default CspHead;