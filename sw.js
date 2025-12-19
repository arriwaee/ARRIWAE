self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/script.js",
        "/manifest.json",
        "/saya.jpeg",
        "/cv mandiri putra.png",
        "/krs.png",
        "/to do list.png",
        "/pembuatan nota.png",
        "/Screenshot 2025-12-19 020626.png",
        "/Baixar código-fonte do desktop e papel de parede por codificação e programação_ gratuitamente.jpg",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
