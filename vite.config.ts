import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      name: 'design-system',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled-components',
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
