import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, type PluginOption } from 'vite';
import dts from 'vite-plugin-dts';
import { maplibreWorker } from './build/maplibreWorker';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.tsx'),
      name: 'design-system',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        'react-router',
        '@tanstack/react-query',
      ],
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
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  plugins: [
    react(),
    maplibreWorker(),
    dts({ rollupTypes: true }),
    visualizer({ brotliSize: true }) as PluginOption,
  ],
});
