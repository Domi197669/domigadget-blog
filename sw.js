const CACHE = "domigadget-v1";
const ASSETS = [
  "/domigadget-blog/",
  "/domigadget-blog/index.html",
  "/domigadget-blog/dist/output.css",
  "/domigadget-blog/about.html",
  "/domigadget-blog/contact.html",
  "/domigadget-blog/privacy.html",
  "/domigadget-blog/terms.html",
  "/domigadget-blog/robots.txt",
  "/domigadget-blog/icons/icon-192.svg",
  "/domigadget-blog/icons/icon-512.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request).then((response) => {
        if (response && response.ok && response.type === "basic") {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
