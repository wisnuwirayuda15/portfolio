/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    theme: {
        fontFamily: {
            quicksand: ["Quicksand", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        transitionDuration: {
            DEFAULT: "500ms",
        },
        extend: {
            animation: {
                gradient: "gradient 2s linear infinite",
            },
            keyframes: {
                gradient: {
                    "0%, 100%": {
                        "background-size": "200% 200%",
                        "background-position": "left center",
                    },
                    "50%": {
                        "background-size": "200% 200%",
                        "background-position": "right center",
                    },
                },
            },
        },
    },
    daisyui: {
        themes: ["cupcake", "night"],
    },
    plugins: [require("daisyui")],
};
