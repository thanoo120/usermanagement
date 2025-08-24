import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
 
  // Tailwind CSS is configured in postcss.config.js, not here
});
