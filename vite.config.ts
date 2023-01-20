import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'public')

export default defineConfig({
    root,
    base: '/static',
    server: {
        host: 'sikessem.test',
        port: 4444
    },
    build: {
        outDir,
        assetsDir: 'assets',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'main.ts'),
            },
            output: {
                manualChunks: undefined,
            }
        }
    }
})
