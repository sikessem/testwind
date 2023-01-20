import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'node', // or 'jsdom'
        include: [
            ...configDefaults.include.map(e => `tests/feat/${e}`),
        ],
        exclude: [
            ...configDefaults.exclude,
            '**/public/**'
        ],
    },
})
