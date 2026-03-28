const CACHE = "v1";

const FILES = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/app.js",
  "/data/barrios.json",
  "/data/rutas.json",
  "/data/alertas.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return Promise.all(
        FILES.map(file =>
          fetch(file).then(res => {
            if (!res.ok) throw new Error(file);
            return cache.put(file, res);
          })
        )
      );
    })
  );
});