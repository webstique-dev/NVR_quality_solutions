import { useEffect } from 'react';
import { SITE_SEO } from '../../config/seoConfig';

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

const SEO = ({
  title,
  description,
  canonical,
  keywords = [],
  image = SITE_SEO.defaultImage,
  type = 'website',
  robots = 'index, follow',
  structuredData = null,
}) => {
  useEffect(() => {
    // 1. Document Title
    if (title) {
      document.title = title;
    }

    // 2. Base Meta Tags
    if (description) {
      upsertMeta('name', 'description', description);
    }

    if (keywords && keywords.length > 0) {
      const keywordString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
      upsertMeta('name', 'keywords', keywordString);
    }

    upsertMeta('name', 'robots', robots);
    upsertMeta('name', 'googlebot', robots);

    // 3. Canonical URL
    const fullCanonical = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${SITE_SEO.domain}${canonical.startsWith('/') ? '' : '/'}${canonical}`
      : `${SITE_SEO.domain}${window.location.pathname}`;

    upsertLink('canonical', fullCanonical);

    // 4. Open Graph Tags
    upsertMeta('property', 'og:title', title || SITE_SEO.siteName);
    upsertMeta('property', 'og:description', description || '');
    upsertMeta('property', 'og:url', fullCanonical);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', SITE_SEO.siteName);

    // 5. Twitter Card Tags
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title || SITE_SEO.siteName);
    upsertMeta('name', 'twitter:description', description || '');
    upsertMeta('name', 'twitter:image', image);

    // 6. JSON-LD Structured Data
    let scriptEl = document.getElementById('seo-jsonld');
    if (structuredData) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.type = 'application/ld+json';
        scriptEl.id = 'seo-jsonld';
        document.head.appendChild(scriptEl);
      }
      const jsonData = Array.isArray(structuredData)
        ? structuredData
        : [structuredData];
      scriptEl.textContent = JSON.stringify(jsonData);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Cleanup jsonld on route changes if unmounted
      const currentScript = document.getElementById('seo-jsonld');
      if (currentScript && !structuredData) {
        currentScript.remove();
      }
    };
  }, [title, description, canonical, JSON.stringify(keywords), image, type, robots, JSON.stringify(structuredData)]);

  return null;
};

export default SEO;
