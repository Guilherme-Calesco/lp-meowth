import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
  },
  build: {
    // Code splitting para melhor cache
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor code
          vendor: ['react', 'react-dom'],
          // Separar ícones em chunk próprio
          icons: ['lucide-react']
        }
      }
    },
    // Otimizações de minificação
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log em produção
        drop_debugger: true
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 600,
  },
  // Otimizar dependências
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  }
})
