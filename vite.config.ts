import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base' define o caminho base para os assets. 
  // './' garante que funcione em qualquer subdiretório (como https://user.github.io/repo/)
  base: './', 
})