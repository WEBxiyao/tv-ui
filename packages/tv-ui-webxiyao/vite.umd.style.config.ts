import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import fs from 'fs-extra'

export default defineConfig({
  plugins: [{
    name: 'remove:tov-ui-style.js',
    closeBundle: () => {
      const tovPath = fileURLToPath(new URL('./dist', import.meta.url))
      const tovPathStyle = resolve(tovPath, 'tov-ui-style.js')
      fs.removeSync(tovPathStyle)
    },
  }],
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'tov-ui.css',
      },
    },
    lib: {
      entry: './src/style.ts',
      formats: ['es'],
      fileName: () => 'tov-ui-style.js',
    },
  },
})
