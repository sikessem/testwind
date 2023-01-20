import { it, expect } from 'vitest'
import { hello } from '../src/hello'

it('should hello by name', function () {
    expect(hello('Sikessem'))
    .toEqual('Hello, Sikessem!')

    expect(hello())
    .toEqual('Hello, World!')
})
