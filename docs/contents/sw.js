'use strict';

var cacheUrls = [
  '/',
  '/css/styleguide.css',
  '/images/daxko.png',
  '/js/scrollspy.js',
  '/js/dropdown.js',
  '/js/fixed-sticky.js'
].map(function(x) { return self.location.origin + x; });

var cacheVersion = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion).then(function(cache) {
      return cache.addAll(cacheUrls);
    })
  );
});

self.addEventListener('activate', function(event) {
  caches.keys().then(function(keys) {
    return Promise.all(
      keys
        .filter(function(key) { return key !== cacheVersion; })
        .map(function(key) { return caches.delete(key); })
    );
  })
});

self.addEventListener('fetch', function(event) {
  event.respondWith(networkFirst(event.request));
});

// Fetch request from the network first, fallback to cache if network request fails
function networkFirst(request) {
  return fetch(request).then(function(response) {
    if(response && response.status === 200) {
      caches.open(cacheVersion).then(function(cache) {
        cache.put(request, response.clone());
      });
    }
    return response;
  }).catch(function() {
    return caches.match(request);
  });
}
