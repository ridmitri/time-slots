/// <reference types="vitest" />
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      }),
    ],

    resolve: {
      alias: {
        utils: path.resolve(__dirname, './src/utils'),
        theme: path.resolve(__dirname, './src/theme'),
        components: path.resolve(__dirname, './src/components'),
      },
    },
    // https://vitest.dev/config/#configuration
    test: {
      globals: true,
    },
  };
});
