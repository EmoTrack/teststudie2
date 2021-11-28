// Perform install steps
let CACHE_NAME = 'my-cache';
let urlsToCache = [
  'offline.html',
    ];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});
