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
        find: /^@tov-ui-webxiyao\/tb/,
        replacement: resolve(baseUrl, 'packages/icons/src'),
      },
      {
        find: /^tov-ui-webxiyao/,
        replacement: resolve(baseUrl, 'packages/tov-ui-webxiyao/src'),
      },
      {
        find: /^@tov-ui-webxiyao\/utils/,
        replacement: resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
