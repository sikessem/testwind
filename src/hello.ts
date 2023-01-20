export function hello(name : string|null = null) {
    return 'Hello, '+(name === null ? 'World' : name)+'!';
}
