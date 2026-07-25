import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Binding to 0.0.0.0 lets any device on your Wi-Fi (e.g. your phone)
// reach this dev server at http://<your-computer-local-ip>:5173
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
