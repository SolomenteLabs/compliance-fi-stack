import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      // ✅ Tell Vite/Rollup to ignore anything that resolves to these packages
      external: ['openai', '@solopass/sdk', 'smartagent']
    }
  }
});
