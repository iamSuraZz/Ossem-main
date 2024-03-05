// service-worker.js
self.addEventListener('fetch', event => {
    const requestURL = new URL(event.request.url);

    // Check if the request protocol is supported
    if (requestURL.protocol === 'http:' || requestURL.protocol === 'https:') {
        // Cache only image requests
        if (requestURL.pathname.match(/\.(png|jpg|svg|jpeg|gif|webp|svg+xml)$/i)) {
            event.respondWith(
                caches.match(event.request).then(response => {
                    // Return cached image if available
                    if (response) {
                        return response;
                    }

                    // Fetch the image from the network
                    return fetch(event.request).then(networkResponse => {
                        // Clone the response before caching
                        const clonedResponse = networkResponse.clone();

                        // Cache the fetched image
                        caches.open('image-cache').then(cache => {
                            cache.put(event.request, clonedResponse).catch(error => {
                                // Handle error gracefully
                                console.error('Failed to cache image:', error);
                            });
                        });

                        return networkResponse;
                    });
                })
            );
        }
    } else {
        // Ignore requests with unsupported schemes (e.g., 'chrome-extension:')
        return;
    }
});
