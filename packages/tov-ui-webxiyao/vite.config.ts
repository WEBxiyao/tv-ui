import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vue(),
    dts({
      entryRoot: 'src',
      outDir: ['es', 'lib'],
      exclude: ['**/tests/**'],
    }),
  ],
  build: {
    rollupOptions: {
      external: ['vue', '@floating-ui/vue', '@v-c/utils', 'lodash-es', '@tov-ui-webxiyao/utils', '@tov-ui-webxiyao/tb'],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          format: 'esm',
          dir: 'es',
        },
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          exports: 'named',
          format: 'cjs',
          dir: 'lib',
        },
      ],
    },
    lib: {
      entry: 'src/index.ts',
    },
  },
})
