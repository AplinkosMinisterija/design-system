# React 19 & React Router 7 Upgrade Design

**Date:** 2026-08-03  
**Version:** 2.0.0  
**Scope:** Major version upgrade for design-system library

## Overview

Upgrade `@aplinkosministerija/design-system` from React 18.2.0 + react-router-dom 6.26.1 to React 19.x + react-router-dom 7.x. This is a breaking change requiring consumers to upgrade their own React installations to 19.x.

## Current State

- **React version:** 18.2.0
- **react-router-dom:** 6.26.1
- **Package version:** 1.6.0
- **Node engines:** >=20.0.0 <21.0.0
- **Published as:** npm package with peer dependencies

## Target State

- **React version:** ^19.0.0
- **react-dom version:** ^19.0.0
- **react-router:** ^7.0.0
- **react-router-dom:** ^7.0.0
- **Package version:** 2.0.0
- **TypeScript types:** Updated for React 19
- **Storybook:** Compatible with React 19

## Breaking Changes

### React 18 → 19
- Automatic batching behavior refinements
- Potential deprecated hook removals or signature changes
- Type system updates in @types/react

### React Router 6 → 7
- Component API changes (props, hook signatures)
- Routing behavior shifts
- Navigation patterns may require updates

## Implementation Phases

### Phase 1: Audit & Discovery
**Goal:** Identify all code that needs updating before touching dependencies.

1. Scan source files (`src/`) for deprecated React patterns
2. Identify React Router hook usage and API calls that changed in v7
3. Check Storybook setup for Router provider compatibility
4. Document all findings in a checklist

### Phase 2: Dependency Updates
**Goal:** Bump versions and resolve conflicts.

1. Update `package.json`:
   - devDependencies: react, react-dom, react-router, react-router-dom
   - peerDependencies: react, react-dom, react-router, react-router-dom
   - Update @types/react and @types/react-dom
   - Update Storybook addons for React 19 compatibility if needed

2. Run `npm install` and resolve any peer dependency conflicts
3. Verify no resolution warnings

### Phase 3: Fix Breaking Changes
**Goal:** Update code to work with React 19 and React Router 7.

1. Update component implementations:
   - Replace deprecated hooks with React 19 equivalents
   - Update React Router hook calls (useNavigate, useLocation, etc.)
   - Fix any hook dependency arrays affected by batching changes

2. Update Storybook decorators:
   - Router provider wrappers for v7 API
   - Story examples using routing features

3. Update TypeScript definitions:
   - Align with @types/react 19
   - Fix any type errors from Router API changes

4. Run `npm run build` and `npm run lint` — fix all errors

### Phase 4: Release
**Goal:** Create changeset and publish version 2.0.0.

1. Create changeset entry:
   ```
   changeset
   # Select: major (breaking)
   # Message: "React 19 and React Router 7 upgrade — breaking change"
   ```

2. Run `npm run packages:publish` or standard release flow
3. Verify version bumps to 2.0.0 in package.json
4. Tag release in git

## Success Criteria

- ✓ `npm run build` passes with no errors
- ✓ `npm run lint` passes with no errors
- ✓ `npm run storybook` starts without errors
- ✓ No TypeScript compilation errors
- ✓ Public API surface unchanged (all exports work as before)
- ✓ Changeset created and published
- ✓ Package version released as 2.0.0

## Testing Strategy

- Build verification (compilation)
- Lint verification (code quality)
- Storybook launch (visual regression check, routing examples work)
- Manual spot-check of key components using Router hooks

## Rollback Plan

If critical issues emerge:
1. Revert to main branch
2. Keep changes in a feature branch for debugging
3. Publish patch fixes once root cause identified

## Notes

- This is a library-level change; consuming projects must upgrade their own React to 19.x
- Peer dependencies in package.json will enforce React 19.x requirement
- All existing component APIs remain unchanged; only internal dependency versions change
