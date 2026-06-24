import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react'],
          forms: ['react-hook-form'],
          // Split large components into separate chunks
          'contact-form': ['./components/ContactForm'],
          'card-component': ['./components/ui/Card'],
          'button-component': ['./components/ui/Button'],
          'image-fallback': ['./components/ui/ImageWithFallback'],
          'roi-calculator': ['./components/ui/ROICalculator'],
          'chat-widget': ['./components/ui/ChatWidget'],
          'code-block': ['./components/ui/CodeBlock'],
          'section-component': ['./components/ui/Section'],
          'icon-component': ['./components/ui/Icon'],
          'seo-component': ['./components/seo/SEO'],
        },
        // Optimize chunk naming
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId) {
            if (facadeModuleId.includes('components/ui')) {
              return 'components/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/seo')) {
              return 'seo/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/ContactForm')) {
              return 'forms/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/ImageWithFallback')) {
              return 'components/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/ROICalculator')) {
              return 'components/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/ChatWidget')) {
              return 'components/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/CodeBlock')) {
              return 'components/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/Section')) {
              return 'components/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/Icon')) {
              return 'components/[name]-[hash].js';
            }
          }
          return 'chunks/[name]-[hash].js';
        },
        // Optimize asset naming
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name]-[hash][extname]';
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(assetInfo.name || '')) {
            return 'images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Add caching headers for static assets
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
})