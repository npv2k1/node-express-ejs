var urlsToCache = [
    '/',
    '/css/app.css',
    '/js/app.js',
    '/img/logoplant.png',
    '/img/philodendronbrokenheart_45_1.webp',
    '/img/aglaonemapinkbeauty_45_1.webp',
    '/img/45_32.webp',
    '/img/stringofbananasspink_45.webp',
    '/img/haworthiacooperihybrid_45.webp',
    '/img/aglaonemalightpink_45_1.webp',
    '/img/christmascactus_45_1.webp',

    '/img/indoorlogo.jfif',
    '/img/airpurifying.jfif',
    '/img/lowmaintainece.jfif',
    '/img/sansevieriagoldenhahni_45_1.webp',
    '/img/ficusprestige_45_1.webp',
    '/img/whiteorchid_45.webp',
    '/img/aglaonemared_45_1.webp',
    '/img/sedumgolden_45_1.webp',
    '/img/xanthosomaplant_45.webp',
    '/img/araliavariegatedwhitemini_45_1.webp',
    '/img/echeveriahybrid_45_1.webp',
    '/img/footer.jpg',

    'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap',
    'https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',

  ];
  
self.addEventListener('install', (event) => {
    console.log("service worker installted")
    event.waitUntil(
      caches.open('static')
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  });

self.addEventListener('activate', (event) => {
    console.log("service worker is activated")
});


self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // The responce is in the cache
          if (response) {
            return response;
          }
  
          // No cache match, we attempt to fetch it from the network
          return fetch(event.request);
        }
      )
    );
  });