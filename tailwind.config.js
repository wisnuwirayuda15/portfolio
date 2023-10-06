/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html"],
    theme: {
        fontFamily: {
            quicksand: ["Quicksand", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        transitionDuration: {
            DEFAULT: "500ms",
        },
        extend: {
            transitionProperty: {
                wh: "width , height",
            },
            animation: {
                gradient: "gradient 2s linear infinite",
                "spin-slow": "spin 5s linear infinite",
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
        themes: [
            "cupcake",
            {
                night: {
                    ...require("daisyui/src/theming/themes")["[data-theme=night]"],
                    neutral: "#4b5563",
                    "base-100": "#1d283a",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
