# React 19 & React Router 7 Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade design-system from React 18.2.0 + react-router-dom 6.26.1 to React 19.x + react-router-dom 7.x, release version 2.0.0.

**Architecture:** Upgrade dependencies in package.json, update source code to align with React 19 and React Router 7 API changes (3 files with Router usage), verify build/lint/Storybook, create changeset, and publish.

**Tech Stack:** React 19.x, react-dom 19.x, react-router 7.x, react-router-dom 7.x, TypeScript 5.x, Vite, Storybook 7.x

## Global Constraints

- Node engines: >=20.0.0 <21.0.0 (no change)
- Peer dependencies must enforce React 19.x requirement
- All public component APIs remain unchanged; only internal dependencies upgrade
- Build must pass: `npm run build`
- Lint must pass: `npm run lint`
- Storybook must launch: `npm run storybook`

---

## File Structure

**Files that will be modified (Router usage):**
- `src/utils/index.ts` — uses `useLocation` and `matchPath` from react-router (1 file)
- `src/components/tables/components/TableContainer.tsx` — uses `useNavigate`, `useSearchParams`, `createSearchParams` from react-router-dom
- `src/components/common/StoryWrapper.tsx` — uses `BrowserRouter` from react-router-dom
- `package.json` — update dependency versions (all 4 Router packages)
- `.storybook/preview.ts` — no Router changes needed (theme setup)

**No changes needed:** All other components (Navigator.tsx, etc.) don't directly use Router APIs.

---

## Task 1: Update package.json with React 19 and React Router 7

**Files:**
- Modify: `package.json` (dependencies and peer dependencies sections)

**Interfaces:**
- Consumes: Current package.json with React 18 versions
- Produces: Updated package.json with React 19 and React Router 7, ready for `npm install`

**Context:** React Router 7 has breaking changes in hook signatures and component props. We'll discover those when we try to build. The latest stable versions are React 19.2.8 and react-router-dom 7.x.

- [ ] **Step 1: Update devDependencies in package.json**

Open `package.json` and update these devDependencies to the latest stable versions:

```json
"react": "^19.2.8",
"react-dom": "^19.2.8",
"react-router": "^7.1.5",
"react-router-dom": "^7.1.5",
"@types/react": "^19.0.0",
"@types/react-dom": "^19.0.0",
```

Also update Storybook dependencies to ensure React 19 compatibility:
```json
"@storybook/addon-controls": "^8.6.0",
"@storybook/addon-essentials": "^8.6.0",
"@storybook/addon-interactions": "^8.6.0",
"@storybook/addon-links": "^8.6.0",
"@storybook/addon-onboarding": "^8.6.0",
"@storybook/addon-styling": "^1.3.7",
"@storybook/blocks": "^8.6.0",
"@storybook/react": "^8.6.0",
"@storybook/react-vite": "^8.6.0",
"@storybook/testing-library": "^0.2.2",
```

- [ ] **Step 2: Update peerDependencies in package.json**

Update these peerDependencies to enforce React 19.x:

```json
"react": "^19.0.0",
"react-dom": "^19.0.0",
"react-router": "^7.0.0",
"react-router-dom": "^7.0.0",
```

These ensure consuming projects know they must upgrade to React 19 and React Router 7.

- [ ] **Step 3: Run npm install**

```bash
npm install
```

Expected output: All packages installed successfully, no peer dependency warnings. If warnings appear, note them—we'll address in the next task.

- [ ] **Step 4: Commit dependency updates**

```bash
git add package.json package-lock.json
git commit -m "chore: upgrade dependencies to React 19 and React Router 7

- React: 18.2.0 → 19.2.8
- react-dom: 18.2.0 → 19.2.8
- react-router: 6.22.2 → 7.1.5
- react-router-dom: 6.26.1 → 7.1.5
- Update Storybook to 8.6.0 for React 19 compatibility
- Update @types/react and @types/react-dom to 19.0.0

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

---

## Task 2: Fix src/utils/index.ts for React Router 7 API changes

**Files:**
- Modify: `src/utils/index.ts:3-59` (useLocation and matchPath imports + usage)

**Interfaces:**
- Consumes: React Router 7 (useLocation, matchPath APIs have no breaking changes in v7)
- Produces: Updated useGetCurrentRoute function compatible with React Router 7

**Context:** In React Router 7, `matchPath` and `useLocation` remain largely compatible, but we need to verify the exact signatures. The main difference is that React Router 7 requires React 19's context APIs.

- [ ] **Step 1: Check current useGetCurrentRoute implementation**

Read lines 54-59 of `src/utils/index.ts` to understand the current usage:

```typescript
export const useGetCurrentRoute = (routes: AppRoute[]) => {
  const currentLocation = useLocation();
  return routes?.find(
    (route: any) => !!matchPath({ path: route.slug, end: true }, currentLocation.pathname),
  );
};
```

This code is compatible with React Router 7. The API signature for `matchPath` in v7 remains the same: `matchPath({ path, end }, pathname)`.

- [ ] **Step 2: Build and test the change**

```bash
npm run build
```

Expected output: No errors related to `useLocation` or `matchPath`. If there are TS errors, it means the import location changed in v7.

- [ ] **Step 3: Commit (if no changes were needed)**

If the code compiles without changes:

```bash
git status
```

No changes should be staged. Move to Task 3.

If changes were needed, commit:

```bash
git add src/utils/index.ts
git commit -m "fix(utils): update Router imports for React Router 7

- useLocation and matchPath compatible with React Router 7
- No API signature changes needed

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

---

## Task 3: Fix src/components/tables/components/TableContainer.tsx for React Router 7

**Files:**
- Modify: `src/components/tables/components/TableContainer.tsx:3` (useNavigate, useSearchParams, createSearchParams imports + usage)

**Interfaces:**
- Consumes: React Router 7 hooks (useNavigate, useSearchParams, createSearchParams)
- Produces: Updated TableContainer with React Router 7 compatible hook calls

**Context:** In React Router 7, the hook APIs remain compatible, but we need to verify. `useNavigate` still returns a function, `useSearchParams` still returns `[searchParams, setSearchParams]`. Check current usage to see if any changes are needed.

- [ ] **Step 1: Verify current hook usage in TableContainer**

Read the full TableContainer.tsx to find how the hooks are used:

```bash
grep -n "useNavigate\|useSearchParams\|createSearchParams" src/components/tables/components/TableContainer.tsx
```

Expected matches:
- Line 3: imports
- Line 49: `const [searchParams] = useSearchParams();`
- Line 50+: usage

- [ ] **Step 2: Check the navigate call usage**

Look for `navigate(` calls in TableContainer.tsx:

```bash
grep -n "navigate(" src/components/tables/components/TableContainer.tsx | head -5
```

This will show how `navigate()` is being called. In React Router 7, the signature remains the same.

- [ ] **Step 3: Build to verify compatibility**

```bash
npm run build
```

Expected output: No errors related to Router hooks. If there are TS errors, the API changed in v7 and we'll need to adjust.

- [ ] **Step 4: Commit (if no changes needed)**

```bash
git status
```

If no changes are staged, move to Task 4. If changes were needed:

```bash
git add src/components/tables/components/TableContainer.tsx
git commit -m "fix(TableContainer): update React Router 7 hook usage

- useNavigate, useSearchParams, createSearchParams compatible with v7
- No signature changes required

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

---

## Task 4: Fix src/components/common/StoryWrapper.tsx for React Router 7

**Files:**
- Modify: `src/components/common/StoryWrapper.tsx:1-12` (BrowserRouter import + usage)

**Interfaces:**
- Consumes: React Router 7 BrowserRouter component
- Produces: StoryWrapper compatible with React Router 7

**Context:** In React Router 7, `BrowserRouter` remains compatible. The main change is that React Router 7 requires React 19's context system, which is transparent to component code. No changes should be needed.

- [ ] **Step 1: Verify BrowserRouter usage**

Read `src/components/common/StoryWrapper.tsx` line 1 and 8 to confirm it's using BrowserRouter correctly:

```typescript
import { BrowserRouter } from 'react-router-dom';

const StoryWrapper = ({ children }: any) => {
  return (
    <DesignSystemProvider>
      <BrowserRouter>
        <InnerContainer>{children}</InnerContainer>
      </BrowserRouter>
    </DesignSystemProvider>
  );
};
```

This usage is compatible with React Router 7.

- [ ] **Step 2: Build to verify**

```bash
npm run build
```

Expected output: No errors related to BrowserRouter.

- [ ] **Step 3: Commit (no changes needed)**

```bash
git status
```

No changes should be needed. Move to Task 5.

---

## Task 5: Verify build, lint, and Storybook

**Files:**
- No files modified; verification only

**Interfaces:**
- Consumes: Updated source code and dependencies from Tasks 1-4
- Produces: Successful build, lint, and Storybook launch

- [ ] **Step 1: Run full build**

```bash
npm run build
```

Expected output:
```
✓ 123 modules transformed
dist/index.es.js  123.45 kB
dist/index.umd.js 145.67 kB
```

No errors or warnings.

- [ ] **Step 2: Run linter**

```bash
npm run lint
```

Expected output:
```
✓ No errors
```

- [ ] **Step 3: Verify Storybook dev server launches**

```bash
timeout 30 npm run storybook &
sleep 5
curl -s http://localhost:6006 | head -20
```

Expected output: HTML response indicating Storybook is running on port 6006. Kill the process after verification:

```bash
pkill -f "storybook dev"
```

- [ ] **Step 4: Commit verification success**

```bash
git status
```

No changes should be staged. All verification passed. Move to Task 6.

---

## Task 6: Create and publish changeset for v2.0.0

**Files:**
- Create: `.changeset/<random-id>.md` (auto-generated by changeset CLI)
- Modify: `package.json` (version updated by changeset publish)
- Modify: `CHANGELOG.md` (auto-updated by changeset publish)

**Interfaces:**
- Consumes: Working build from Task 5
- Produces: Published package at version 2.0.0 on npm

**Context:** The changeset CLI generates a temporary file, then `packages:publish` processes it and bumps the version. We'll create a major version changeset (major breaking change).

- [ ] **Step 1: Create changeset**

```bash
npm run packages:changeset
```

This opens an interactive prompt. Respond as follows:
- Prompt: "Which packages would you like to include?" → Select `@aplinkosministerija/design-system` (or press Enter if it's the only one)
- Prompt: "What kind of change is this for..." → Select **major** (breaking change)
- Prompt: "Please enter a summary..." → Enter:
  ```
  React 19 and React Router 7 upgrade — breaking change for v2.0.0
  ```
- Prompt: "Please enter a longer description..." → Enter:
  ```
  Upgrade to React 19.2.8 and react-router-dom 7.1.5. 
  Consumers must upgrade their own React installations to 19.x.
  All component APIs remain unchanged; only dependencies updated.
  ```

Expected output:
```
✔ Changeset added to .changeset/
```

- [ ] **Step 2: Verify changeset file was created**

```bash
ls -la .changeset/ | grep -v "^\."
```

Expected output: One or more `.md` files in `.changeset/` directory.

- [ ] **Step 3: Publish the changeset**

```bash
npm run packages:publish
```

This runs `changeset publish`, which:
1. Bumps version in package.json to 2.0.0
2. Updates CHANGELOG.md
3. Publishes to npm
4. Tags the release in git

Expected output:
```
✓ @aplinkosministerija/design-system@2.0.0 published to npm
```

- [ ] **Step 4: Verify version bump**

```bash
grep '"version"' package.json
```

Expected output:
```json
"version": "2.0.0",
```

- [ ] **Step 5: Verify npm package**

Wait 30 seconds for npm replication, then check:

```bash
npm view @aplinkosministerija/design-system@2.0.0
```

Expected output: Package info showing version 2.0.0, published timestamp.

- [ ] **Step 6: Commit final state (if needed)**

```bash
git status
```

All changes should already be committed by `changeset publish`. If any untracked files remain:

```bash
git add .
git commit -m "chore: finalize React 19 upgrade to v2.0.0

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

---

## Verification Checklist (Post-Implementation)

Before declaring this complete, verify:

- ✓ `npm run build` passes
- ✓ `npm run lint` passes
- ✓ `npm run storybook` launches without errors
- ✓ Package published to npm as v2.0.0
- ✓ package.json shows `"version": "2.0.0"`
- ✓ peerDependencies enforce React 19.x
- ✓ All commits present in git log
- ✓ Changeset entries cleaned up (moved to CHANGELOG.md)

---

## Rollback Instructions (if needed)

If critical issues emerge after release:

```bash
# Revert to previous commit
git revert HEAD

# Unpublish from npm (requires npm-cli permissions)
npm unpublish @aplinkosministerija/design-system@2.0.0 --force

# Create a hotfix branch and iterate
git checkout -b hotfix/v2.0.1
# ... make fixes ...
npm run packages:changeset  # patch
npm run packages:publish
```
