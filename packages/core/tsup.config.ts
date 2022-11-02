import { defineConfig } from 'tsup'

// --format esm,cjs --watch --dts --external react
export default defineConfig((options) => ({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'clsx'],
  treeshake: !options.watch,
}))
