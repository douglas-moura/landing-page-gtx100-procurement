/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'colorido': "url('/src/img/bg-colorido.png')",
                'tracado': "url('/src/img/bg-tracado.png')",
            },
        },
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif']
        }
    },
    plugins: [],
}

