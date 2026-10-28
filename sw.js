const CACHE_NAME = "ninety-day-tracker-v1";
const APP_SCOPE = self.registration.scope;
const INDEX_URL = new URL("./index.html", APP_SCOPE).href;
const ROOT_URL = APP_SCOPE;
const ICON_URLS = [
  new URL("./icon-192.png", APP_SCOPE).href,
  new URL("./icon-512.png", APP_SCOPE).href,
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([INDEX_URL, ...ICON_URLS]);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => name.startsWith("ninety-day-tracker-") && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const requestURL = new URL(request.url);
  if (requestURL.origin !== self.location.origin || !requestURL.href.startsWith(APP_SCOPE)) return;

  const isIndex = request.mode === "navigate" || requestURL.href === INDEX_URL;
  if (isIndex) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response.ok) {
          await cache.put(request, response.clone());
          await cache.put(ROOT_URL, response.clone());
          await cache.put(INDEX_URL, response.clone());
        }
        return response;
      } catch {
        return await cache.match(request)
          || await cache.match(ROOT_URL)
          || await cache.match(INDEX_URL)
          || Response.error();
      }
    })());
    return;
  }

  if (ICON_URLS.includes(requestURL.href)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    })());
  }
});
