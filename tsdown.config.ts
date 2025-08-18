import { defineConfig } from 'tsdown'

export default defineConfig({
  publicDir: [
    'snippets',
  ],
  format: ['cjs'],
  shims: false,
  dts: false,
  external: [
    'vscode',
  ],
})
