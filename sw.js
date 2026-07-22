const CACHE_NAME = 'absen-da-v1';
const urlsToCache = ['index.html', 'manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
```

---

### 3. Update di `index.html` (Wajib)
Lo harus nambahin kode panggilannya di dalem file `index.html`. Tambahin dua baris ini di dalem bagian `<head>`:

```html
<link rel="manifest" href="manifest.json">
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
</script>