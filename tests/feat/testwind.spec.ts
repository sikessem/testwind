import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import tailwindcss, { type Config } from 'tailwindcss';
import resolveConfig from 'tailwindcss/resolveConfig';
import preset from '../../src/config';
import plugin from '../../src/plugin';

import { describe, it, expect } from 'vitest';

function run(config: Config, tailwind = tailwindcss) {
  let { currentTestName } = expect.getState()
  config = resolveConfig({
    presets: [preset],
    plugins: [plugin],
    corePlugins: { preflight: false },
    ...config,
  })

  return postcss(tailwind(config)).process('@tailwind components', {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  })
}

const data = fs.readFileSync(path.resolve(__dirname, '../../res/page.html'), 'utf8');

describe.concurrent('suite', () => {
    const config = {
        content: [{ raw: String.raw`${data}` }],
    }
    it('should have the `input` class', () => {
        return run(config).then((result) => {
            expect(result.css)
            .toMatch(/[\s\S]*\.input\s*\{[\s\S]*padding\-left:\s*1rem\;?[\s\S]*\}[\s\S]*/)
        })
    })
    it('should have the `button` class', () => {
        return run(config).then((result) => {
            expect(result.css)
            .toMatch(/[\s\S]*\.button\s*\{[\s\S]*padding\-right:\s*1rem\;?[\s\S]*\}[\s\S]*/)
        })
    })
})
