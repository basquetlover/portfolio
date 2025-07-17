// // public/sw.js

// const CACHE_NAME = 'portfolio-cache-v1';
// const URLS_TO_CACHE = [
//   '/',
//   // Agrega más rutas estáticas si las tienes
// ];

// // Al instalar el Service Worker
// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(URLS_TO_CACHE);
//     })
//   );
//   self.skipWaiting();
// });

// // Activar el nuevo Service Worker y limpiar cachés viejas
// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((keyList) =>
//       Promise.all(
//         keyList.map((key) => {
//           if (key !== CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       )
//     )
//   );
//   self.clients.claim();
// });

// // Interceptar solicitudes de red
// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cached) => {
//       return cached || fetch(event.request);
//     })
//   );
// });
