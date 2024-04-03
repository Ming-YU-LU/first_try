import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            vue(),
            AutoImport({
                imports: ['vue', 'vue-router'],
                dts: 'src/auto-import.d.ts',
            }),
            Components({
                resolvers: [
                    AntDesignVueResolver({
                        importStyle: false
                    })
                ]
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
    }
})
