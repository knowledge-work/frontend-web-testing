import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
    assetsDir: '',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) return 'style.css'
          return assetInfo.name
        },
      },
    },
  },
})
