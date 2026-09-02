import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // ou vue, svelte, etc.

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexões externas ao contêiner
    port: 5173,
    watch: {
      usePolling: true, // Garante que o Hot Reload funcione em computadores escolares/Windows antigo
    },
  },
})
