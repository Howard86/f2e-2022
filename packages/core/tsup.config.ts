import { defineConfig } from 'tsup'

export default defineConfig((options) => ({
  clean: true,
  entry: ['src/index.tsx'],
  external: ['react', 'clsx'],
  format: ['esm', 'cjs'],
  treeshake: !options.watch,
}))
