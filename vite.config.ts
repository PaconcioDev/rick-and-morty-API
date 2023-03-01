import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://PaconcioDev.github.io/rick-and-morty-API/",
  plugins: [react()],
})
