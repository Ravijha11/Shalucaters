// Service Worker for Shalu Caters Website
const CACHE_NAME = 'shalu-caters-v1'
const urlsToCache = [
  '/',
  '/app/page.tsx',
  '/components/hero-section.tsx',
  '/components/services-section.tsx',
  '/components/dj-services-section.tsx',
  '/components/masala-machine-section.tsx',
  '/components/popcorn-machine-section.tsx',
  '/components/pricing-section.tsx',
  '/components/smart-booking-section.tsx',
  '/components/about-section.tsx',
  '/components/faq-section.tsx',
  '/app/globals.css',
  '/app/layout.tsx'
]

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
})

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName)
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Background sync for offline functionality
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  // Handle offline form submissions
  const pendingSubmissions = await getPendingSubmissions()
  for (const submission of pendingSubmissions) {
    try {
      await submitForm(submission)
      await removePendingSubmission(submission.id)
    } catch (error) {
      console.error('Failed to sync submission:', error)
    }
  }
}

// Push notifications for booking updates
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New booking update available',
    icon: '/placeholder-logo.png',
    badge: '/placeholder-logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  }
  
  event.waitUntil(
    self.registration.showNotification('Shalu Caters', options)
  )
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow('/')
  )
})
