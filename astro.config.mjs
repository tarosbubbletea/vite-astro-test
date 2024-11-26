import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import reactRefresh from '@vitejs/plugin-react';


// https://astro.build/config
export default defineConfig({
 integrations: [react()],
 vite: {
  plugins: [
    reactRefresh({
      include: /\.(astro|js|jsx|ts|tsx)$/
    })
  ],
  commonjsOptions: { transformMixedEsModules: true }
},
});
