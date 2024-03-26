import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import vue from '@vitejs/plugin-vue'
const baseUrl = cwd()
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vue(),
  ],
  resolve: {
    alias: [
      {
        find: /^@tov-ui-webxiyao\/utils/,
        replacement: resolve(baseUrl, '../utils/src'),
      },
    ],
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      name: 'tovUI',
      fileName: () => 'tov-ui.js',
    },
  },
})
