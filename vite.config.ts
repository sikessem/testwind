import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';


const Env = dotenv.config();
dotenvExpand.expand(Env);

const host = process.env.VITE_SERVER_HOST;
const base = process.env.VITE_SERVER_BASE;

const assetsDir = 'assets';
const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'public');

export default defineConfig({
    root,
    base,
    server: {
        host,
        base,
    },
    build: {
        outDir,
        assetsDir,
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'page.html'),
            },
            output: {
                manualChunks: undefined,
            }
        }
    }
})
