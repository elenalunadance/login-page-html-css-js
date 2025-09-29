import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/login-page-html-css-js/',
  build: {
    rollupOptions: {
      input: {
        signup: resolve(__dirname, 'signup.html'),
        forgot: resolve(__dirname, 'forgot-password.html'),
        login: resolve(__dirname, 'login.html'),
        terms: resolve(__dirname, 'terms.html'),
        privacy: resolve(__dirname, 'privacy.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/scss/_variables.scss" as *;`,
      },
    },
  },
});
