# Modernization plan

## Completed in this migration

1. Replace pnpm with Bun 1.3.14 workspaces and a frozen `bun.lock`.
2. Upgrade Turborepo to v2 and add cached per-workspace `tsc --noEmit` tasks.
3. Replace ESLint and Prettier with Ultracite 7.9.4 and Biome 2.5.5.
4. Move local hooks and GitHub workflows to the shared Bun quality gates.
5. Replace Renovate with weekly Dependabot updates for npm packages and GitHub Actions.

## Validation

Run these checks on the final combined branch:

```bash
bun install --frozen-lockfile
bun run check
bun run typecheck
bun run test
bun run build
typos
gitleaks detect --redact
```

The reusable CI workflow intentionally leaves builds to deployment previews while keeping tests enabled.

## Remaining decisions

- Keep Jest until the React/jsdom suite is large enough to justify a measured Bun test migration.
- Adopt Knip only when unused-code enforcement is wanted; `howard86/actions` v2 makes it mandatory, so this repository remains on the SHA-pinned v1 workflow meanwhile.
- Verify the first Dependabot PR updates `bun.lock`; otherwise regenerate it locally before merging.
