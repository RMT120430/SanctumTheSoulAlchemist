const CACHE_NAME = 'STSA v3.9.8';
const urlsToCache = [
  '/SanctumTheSoulAlchemist/',
  '/SanctumTheSoulAlchemist/index.html',
  '/SanctumTheSoulAlchemist/styles.css',
  '/SanctumTheSoulAlchemist/script.js',
  '/SanctumTheSoulAlchemist/manifest.json',
  '/SanctumTheSoulAlchemist/icon-192.png',
  '/SanctumTheSoulAlchemist/icon-web.png',
  'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/SanctumTheSoulAlchemist/sw.js')
    .then(reg => console.log('Service Worker 註冊成功 - sw.js:28'))
    .catch(err => console.log('Service Worker 註冊失敗 - sw.js:29', err));
}
