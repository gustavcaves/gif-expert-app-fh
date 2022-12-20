import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { proxy: {
    '/api': {
         target: 'http://http.ntlm.internetpsa.inetpsa.com:8080',
         changeOrigin: true,
         secure: false,      
         ws: true,
     }
}
  },
})
