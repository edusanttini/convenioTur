// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from "rollup-plugin-visualizer";
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  plugins: [ react(), visualizer(), splitVendorChunkPlugin() ],
  build: {
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('src/components/Util/Base64ArgFlag')) {
            return '@utilArg';
          }
          if (id.includes('src/components/Util')) {
            return '@util';
          }
          if (id.includes('three.module')) {
            return '@threeJS';
          }
          /*if (id.includes('react-reconciler') ||TODO: find out which one is causing the issue!
              id.includes('i18next') ||
              id.includes('GLTFLoader') ||
              id.includes('react-dom.production') ||
              id.includes('fiber')) {
            return '@deps';
          }*/
        },
      },
    },
  },
});