import '@testing-library/jest-dom/vitest';
import { configure } from '@testing-library/dom';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Without vitest `globals`, testing-library never registers its own afterEach,
// so rendered trees from earlier tests stay in the document.
afterEach(cleanup);

// These components mount noticeably slower in jsdom (styled-components + popup
// internals); the default 1 s waitFor window flakes under load.
configure({ asyncUtilTimeout: 3000 });

// jsdom has no IntersectionObserver; the option lists use it for paging. A no-op
// stub is enough — tests never scroll.
class IntersectionObserverStub implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: readonly number[] = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}
globalThis.IntersectionObserver ??= IntersectionObserverStub;
