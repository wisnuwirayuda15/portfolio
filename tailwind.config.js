/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        fontFamily: {
            quicksand: ['Quicksand', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
        },
        extend: {},
    },
    daisyui: {
        themes: ['cupcake', 'night'],
    },
    plugins: [require('daisyui')],
};
