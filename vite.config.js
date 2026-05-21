import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({ jsxRuntime: 'classic' })],
  optimizeDeps: {
    exclude: ['react/jsx-runtime', 'react/jsx-dev-runtime'],
  },
})
