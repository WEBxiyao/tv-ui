import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import Component from 'unplugin-vue-components/vite'
import { tovUiResolver } from './scripts/tov-ui-resolver'

// const baseUrl = fileURLToPath(new URL('.', import.meta.url))
const baseUrl = cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
    Component({
      resolvers: [tovUiResolver()],
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^@tv-ui-webxiyao\/tb/,
        replacement: resolve(baseUrl, 'packages/icons/src'),
      },
      {
        find: /^tv-ui-webxiyao/,
        replacement: resolve(baseUrl, 'packages/tv-ui-webxiyao/src'),
      },
      {
        find: /^@tv-ui-webxiyao\/utils/,
        replacement: resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
