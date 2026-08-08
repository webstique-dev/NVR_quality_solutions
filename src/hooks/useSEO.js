import { useEffect } from 'react';

const upsertMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  if (content) el.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  if (href) el.setAttribute('href', href);
};

/**
 * Lightweight per-route SEO manager (no heavy head-manager dependency).
 * Accepts { title, description, keywords } plus optional JSON-LD data
 * and OG image override. Runs on mount and whenever inputs change.
 */
export const useSEO = ({ title, description, keywords = [], jsonLd } = {}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      upsertMeta('name', 'description', description || '');
      upsertMeta('name', 'keywords', keywords.join(', '));
      upsertMeta('property', 'og:title', title);
      upsertMeta('property', 'og:description', description || '');

      const canonical = `${window.location.origin}${window.location.pathname}`;
      upsertLink('canonical', canonical);
      upsertMeta('property', 'og:url', canonical);
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

    /* Restore site-level defaults on unmount so the next route is not
       poisoned by the previous page's meta. */
    return () => {
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, keywords.join('|'), jsonLd]);
};