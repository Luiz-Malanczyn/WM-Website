import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Permite acessar pelo DevContainer
    port: 5173, // Define a porta
    strictPort: true // Garante que vai usar a porta especificada
  }
})
