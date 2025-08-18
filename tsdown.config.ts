import { defineConfig } from 'tsdown'

export default defineConfig({
  format: ['cjs'],
  shims: false,
  dts: false,
  external: [
    'vscode',
  ],
})
