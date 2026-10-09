import { getWorkerUrl, setWorkerUrl } from 'maplibre-gl';
// Built by `build/maplibreWorker.ts`: MapLibre's worker and its shared chunk as one module.
import workerSource from 'virtual:maplibre-gl-worker';

/**
 * Points MapLibre at its worker before the first map is created.
 *
 * MapLibre 6 otherwise looks for `maplibre-gl-worker.mjs` next to the module that loaded
 * it, which inside an app's bundle is a file that does not exist (`/assets/…` 404, and
 * the map never loads). A Blob URL is same-origin, so it works under any bundler, in dev
 * and production, and offline in a PWA. Runs once; a URL set earlier is kept.
 */
export const ensureMaplibreWorker = () => {
  if (getWorkerUrl()) return;
  if (typeof Blob === 'undefined' || typeof URL?.createObjectURL !== 'function') return;

  setWorkerUrl(URL.createObjectURL(new Blob([workerSource], { type: 'text/javascript' })));
};
