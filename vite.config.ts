import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // '/reactapi': 'http://localhost:6565/reactapi'
      '/reactapi': {
        target: 'http://localhost:6565',
        rewrite: (path) => path.replace(/^\/reactapi/, '/reactapi')
      }
    }
  }
})
