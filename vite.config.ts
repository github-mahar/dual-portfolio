import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'GM.png', 'Logo.jpg', 'icons.svg'],
      manifest: {
        name: 'GM | EzzCode Portfolio',
        short_name: 'EzzCode',
        description: 'Mahar GM — Frontend & Shopify Developer Portfolio',
        start_url: '/',
        display: 'standalone',
        background_color: '#FAFAF8',   // --color-paper
        theme_color: '#C75D3B',        // --color-clay
        orientation: 'portrait-primary',
        categories: ['portfolio', 'developer', 'web'],
        icons: [
          {
            src: '/GM.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/GM.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/GM.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precache all build assets automatically (JS, CSS, HTML)
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,woff,woff2}'],

        // Runtime caching strategies
        runtimeCaching: [
          {
            // Cache-first for static image assets
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            // Cache-first for Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-stylesheets',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
            },
          },
          {
            // Cache-first for Google Fonts webfont files
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Network-first for navigations / dynamic content
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
              },
            },
          },
        ],
      },
    }),
  ],
})
