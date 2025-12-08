import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// voor via github alleen
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})

//
// // voor eigen domein
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//
// export default defineConfig({
//   plugins: [react()],
//   base: '/', // Belangrijk: geen pad meer
// })