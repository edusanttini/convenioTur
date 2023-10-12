// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [ react() ],
  build: {
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
            return 'vendor';
          }
          if (id.includes('src/components/AppProducts')) {
            return 'productsChunk';
          }
          if (id.includes('src/components/blobs')) {
            return 'blobChunk';
          }
          if (id.includes('src/components/canvas')) {
            return 'canvasChunk';
          }
          if (id.includes('src/components/Util/Base64ArgFlag')) {
            return 'utilArgChunk';
          }
          if (id.includes('src/components/countries/RidesList')) {
            return 'ridesChunk';
          }
          if (id.includes('src/components/countries/Brasil')) {
            return 'brChunk';
          }
          if (id.includes('src/components/countries/Argentina')) {
            return 'argChunk';
          }
          if (id.includes('src/components/countries/Paraguay')) {
            return 'pyChunk';
          }
          if (id.includes('src/components/countries')) {
            return 'countriesChunk';
          }
          if (id.includes('src/components/Handlers')) {
            return 'handlerChunk';
          }
          if (id.includes('src/components/Util')) {
            return 'utilChunk';
          }
          if (id.includes('src/constants')) {
            return 'constantsChunk';
          }
        },
      },
    },
  },
});