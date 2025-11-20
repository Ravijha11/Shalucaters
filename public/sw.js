// Service Worker for Offline Support and Aggressive Caching
const CACHE_NAME = 'shalu-caters-v1'
const RUNTIME_CACHE = 'shalu-caters-runtime-v1'
const IMAGE_CACHE = 'shalu-caters-images-v1'

// Resources to cache immediately
const PRECACHE_URLS = [
  '/',
  '/globals.css',
  '/_next/static/css/app.css',
]

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS.filter(Boolean))
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== RUNTIME_CACHE && name !== IMAGE_CACHE)
          .map((name) => caches.delete(name))
      )
    })
  )
  return self.clients.claim()
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip cross-origin requests (except images)
  if (url.origin !== location.origin && !request.url.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
    return
  }

  // Handle images with aggressive caching
  if (request.url.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                cache.put(request, response.clone())
              }
              return response
            })
            .catch(() => {
              // Return placeholder if offline
              return new Response(
                '<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" fill="#9ca3af">Image unavailable</text></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              )
            })
        })
      })
    )
    return
  }

  // Handle HTML and CSS with network-first strategy
  if (request.headers.get('accept')?.includes('text/html') || request.url.endsWith('.css')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
          return response
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse
            }
            // Return offline page
            return new Response('Offline - Please check your connection', {
              headers: { 'Content-Type': 'text/html' },
            })
          })
        })
    )
    return
  }

  // Handle other resources with cache-first strategy
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse
      }
      return fetch(request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // Return cached version if available
          return caches.match(request)
        })
    })
  )
})
