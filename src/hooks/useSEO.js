import { useEffect } from 'react';
import { SITE_SEO } from '../config/seoConfig';

const upsertMeta = (attr, key, content) => {
  if (!key) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

export const useSEO = ({ title, description, keywords = [], jsonLd, canonical } = {}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta('name', 'description', description || '');
      if (keywords && keywords.length > 0) {
        upsertMeta('name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);
      }
      upsertMeta('property', 'og:title', title);
      upsertMeta('property', 'og:description', description || '');

      const fullCanonical = canonical
        ? canonical.startsWith('http')
          ? canonical
          : `${SITE_SEO.domain}${canonical}`
        : `${SITE_SEO.domain}${window.location.pathname}`;

      upsertLink('canonical', fullCanonical);
      upsertMeta('property', 'og:url', fullCanonical);
      upsertMeta('property', 'og:type', 'website');
    }

    let jsonLdScript = document.getElementById('route-jsonld');
    if (jsonLd) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.type = 'application/ld+json';
        jsonLdScript.id = 'route-jsonld';
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLd);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }

    return () => {
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, JSON.stringify(keywords), jsonLd, canonical]);
};