import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      Icons({
        autoInstall: true
      }),
      Components({
        dirs: [resolve('src/renderer/src/components'),resolve('src/renderer/src/pages')],
        extensions: ['vue', 'ts'],
        resolvers: [
          IconsResolver({
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ]
      })
    ]
  }
})
