import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./src/index.tsx"),
      name: "design-system",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled-components",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true })],
});