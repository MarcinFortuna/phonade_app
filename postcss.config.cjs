module.exports = {
    plugins: {
        tailwindcss: {
            content: [
                "./index.html",
                "./src/*.{js,ts,jsx,tsx}",
                "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [require('daisyui')],
            daisyui: {
                themes: ["dark", "light"],
            }
        },
        autoprefixer: {},
    },
}
