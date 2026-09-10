import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE PARA GITHUB PAGES:
  // Rutas relativas para que los archivos JS/CSS no arrojen 404 en subdirectorios
  base: './',
});