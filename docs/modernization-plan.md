# Modernization plan

## Completed in this migration

1. Replace pnpm with Bun 1.3.14 workspaces and a frozen `bun.lock`.
2. Upgrade Turborepo to v2 and add cached per-workspace `tsc --noEmit` tasks.
3. Replace ESLint and Prettier with Ultracite 7.9.4 and Biome 2.5.5.
4. Move local hooks and GitHub workflows to the shared Bun quality gates.
5. Replace Renovate with weekly Dependabot updates for npm packages and GitHub Actions.
6. Migrate the React and DOM test suites from Jest to Bun's test runner with Happy DOM.
7. Enforce unused-code analysis with Knip and `howard86/actions` v2.

## Validation

Run these checks on the final combined branch:

```bash
bun install --frozen-lockfile
bun run check
bun run typecheck
bun run knip
bun run test
bun run build
typos
gitleaks detect --redact
```

The reusable CI workflow intentionally leaves builds to deployment previews while keeping tests enabled.

## Remaining decisions

- Verify the first Dependabot PR updates `bun.lock`; otherwise regenerate it locally before merging.
