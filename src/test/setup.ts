import '@testing-library/jest-dom/vitest';
import { configure } from '@testing-library/dom';

// These components mount noticeably slower in jsdom (styled-components + popup
// internals); the default 1 s waitFor window flakes under load.
configure({ asyncUtilTimeout: 3000 });
