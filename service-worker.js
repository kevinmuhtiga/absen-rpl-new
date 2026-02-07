self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("absensi-rpl").then(cache => {
      return cache.addAll([
        "/",
        "/index.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() =>
      new Response(
        "Tidak ada koneksi internet. Silakan aktifkan jaringan.",
        { headers: { "Content-Type": "text/plain" } }
      )
    )
  );
});
