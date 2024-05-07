import { defineConfig, transformWithEsbuild } from 'vite'
// import react from '@vitejs/plugin-react';
import react from '@vitejs/plugin-react-swc'
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'node:url';


/* const sourceJSPattern = /\/src\/.*\.js$/;
const rollupPlugin = (matchers) => ({
  name: "js-in-jsx",
  load(id) {
    if (matchers.some(matcher => matcher.test(id))) {
      const file = fs.readFileSync(id, { encoding: "utf-8" });
      return esbuild.transformSync(file, { loader: "jsx" });
    }
  }
}); */
// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: 'jsx',
    // jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react'`,
  },
  plugins: [
   /*  {
    name: 'treat-js-files-as-jsx',
    async transform(code, id) {
      if (!id.match(/src\/.*\.js$/))  return null

      // Use the exposed transform from vite, instead of directly
      // transforming with esbuild
      return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
      })
    },
  }, react({
    babel: {
      babelrc: true
    }
  })
*/
    react()],
  /* optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  }, */
  resolve: {
    alias: {
      find: "@",
      replacement: resolve(dirname(fileURLToPath(import.meta.url)),'.', 'src/components')
    }
  }

})
