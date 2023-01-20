import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    presets: [],

    prefix: 'ske-',

    content: ['./src/**/*.{ts,js}'],

    darkMode: ['class', '[data-mode="dark"]'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],

    variants: {
        display: ['group-hover', 'group-focus'],
        position: ['group-hover', 'group-focus'],
    }
}
