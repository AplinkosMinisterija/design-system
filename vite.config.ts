import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'lib/index.js', // Path to your library's entry point
      name: 'design-system', // The name your library will be exposed as globally in UMD builds
      fileName: (format) => `design-system.${format}.tsx` // The output file name
    },
    rollupOptions: {
      // Externalize dependencies so they're not bundled into the library
      external: ['react'], // Example: Externalize React and Vue to keep the bundle size small
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          vue: 'Vue'
        },
      },
    },
  },
});
