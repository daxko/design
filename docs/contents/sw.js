'use strict';

var basepath = self.location.origin + self.location.pathname.replace(/sw\.js/, '');
var cacheUrls = [
  '/',
  '/css/styleguide.css',
  '/images/daxko.png',
  '/js/scrollspy.js',
  '/js/dropdown.js',
  '/js/fixed-sticky.js',
  '/offline.html'
].map(function(x) { return basepath.replace(/\/$/, '') + x; });

var cacheVersion = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion).then(function(cache) {
      return cache.addAll(cacheUrls);
    })
  );
  fetch('http://thecatapi.com/api/images/get?format=src&type=gif', { mode: 'cors' }).then(function(response) {
    caches.open(cacheVersion).then(function(cache) {
      cache.put(basepath + 'images/offline.gif', response.clone());
    });
  });
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
    if(response && (response.ok || response.status === 302)) {
      caches.open(cacheVersion).then(function(cache) {
        cache.put(request, response.clone());
      });
    }
    return response;
  }).catch(function() {
    return caches.match(request);
  }).then(function(response) {
    return response || caches.match('/offline.html');
  });
}
