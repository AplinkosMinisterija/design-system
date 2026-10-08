import { createRequire } from 'module';
import { build, type Plugin } from 'vite';

export const MAPLIBRE_WORKER_MODULE = 'virtual:maplibre-gl-worker';
const RESOLVED_ID = `\0${MAPLIBRE_WORKER_MODULE}`;

/**
 * Inlines MapLibre GL's web worker into the library as a self-contained source string.
 *
 * MapLibre 6 ships its worker as a separate ES module (`maplibre-gl-worker.mjs`, which
 * imports `maplibre-gl-shared.mjs`) and, unless `setWorkerUrl()` is called, loads it from
 * `new URL('./maplibre-gl-worker.mjs', import.meta.url)` at runtime. The URL is built
 * from a variable, so no bundler can see or emit the file: bundled into this library,
 * and then again into an app, it resolves next to the app's chunk and 404s.
 *
 * This bundles the worker and its shared chunk into one module at build time and exposes
 * it as `virtual:maplibre-gl-worker` (default export: the code string). The map component
 * turns it into a same-origin Blob URL for `setWorkerUrl()` — what MapLibre 4 did on its
 * own, so apps need no worker file, bundler setting or CSP change beyond what they had.
 */
export const maplibreWorker = (): Plugin => {
  let source: Promise<string> | undefined;

  const bundleWorker = async () => {
    const require = createRequire(import.meta.url);
    const entry = require.resolve('maplibre-gl/dist/maplibre-gl-worker.mjs');
    const output = await build({
      configFile: false,
      logLevel: 'warn',
      publicDir: false,
      build: {
        write: false,
        minify: true,
        sourcemap: false,
        emptyOutDir: false,
        lib: { entry, formats: ['es'], fileName: () => 'maplibre-gl-worker.js' },
        rollupOptions: { output: { inlineDynamicImports: true } },
      },
    });
    const outputs = (Array.isArray(output) ? output : [output]) as Array<{
      output: Array<{ type: string; code?: string }>;
    }>;
    const chunks = outputs.flatMap((o) => o.output).filter((o) => o.type === 'chunk');
    if (chunks.length !== 1 || !chunks[0].code) {
      throw new Error(`maplibre-gl worker must bundle into one chunk, got ${chunks.length}`);
    }
    return chunks[0].code;
  };

  return {
    name: 'maplibre-gl-worker',
    resolveId(id) {
      return id === MAPLIBRE_WORKER_MODULE ? RESOLVED_ID : undefined;
    },
    async load(id) {
      if (id !== RESOLVED_ID) return;
      source ??= bundleWorker();
      return `export default ${JSON.stringify(await source)};`;
    },
  };
};
