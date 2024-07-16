import { defineConfig, transformWithEsbuild } from 'vite'
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: '.',
  esbuild: {
    loader: 'jsx',
    jsxInject: `import React from 'react'`,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(dirname(fileURLToPath(import.meta.url)), 'src/'),
      "@hooks": resolve(dirname(fileURLToPath(import.meta.url)), 'src', 'hooks')
    }
  }
})
