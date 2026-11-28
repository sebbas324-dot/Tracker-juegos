// Ludoteca — Service Worker Offline v39 (Auto-actualización + Network-First en app)
const CACHE_NAME = 'ludoteca-offline-v39';
const PRECACHE_URLS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await Promise.allSettled(
      PRECACHE_URLS.map((url) =>
        fetch(url, { mode: url.startsWith('http') ? 'no-cors' : 'same-origin', cache: 'no-cache' })
          .then((res) => cache.put(url, res))
          .catch(() => {})
      )
    );
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  // Nunca cachear las llamadas en vivo a Google Apps Script
  if (url.hostname.includes('script.google.com') || url.hostname.includes('script.googleusercontent.com')) {
    return;
  }

  const isSameOrigin = url.origin === self.location.origin;
  const isAppShellFile = isSameOrigin && (
    req.mode === 'navigate'
    || url.pathname.endsWith('/')
    || url.pathname.endsWith('.html')
    || url.pathname.endsWith('.js')
    || url.pathname.endsWith('.css')
    || url.pathname.endsWith('manifest.json')
  );

  // Archivos de la app (HTML, JS, CSS): Network-First para recibir cambios de GitHub al instante con respaldo offline
  if (isAppShellFile) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const fresh = await fetch(req, { cache: 'no-cache' });
        if (fresh && fresh.status === 200) {
          cache.put(req, fresh.clone());
        }
        return fresh;
      } catch (err) {
        const cached = await cache.match(req)
          || (req.mode === 'navigate' ? (await cache.match('./index.html') || await cache.match('./')) : null);
        return cached || new Response('Sin conexión y sin caché local todavía.', { status: 503 });
      }
    })());
    return;
  }

  // Librerías CDN, fuentes e iconos: Cache-First + actualización en segundo plano
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req, { ignoreSearch: false });
    const fetchPromise = fetch(req).then((res) => {
      if (res && (res.status === 200 || res.type === 'opaque')) {
        cache.put(req, res.clone());
      }
      return res;
    }).catch(() => null);

    return cached || (await fetchPromise) || new Response('', { status: 504 });
  })());
});
