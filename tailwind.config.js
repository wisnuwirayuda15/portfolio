/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html"],
    theme: {
        fontFamily: {
            quicksand: ["Quicksand", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
        },
        transitionDuration: {
            DEFAULT: "500ms",
        },
        letterSpacing: {
            tightest: "-.075em",
            tighter: "-.05em",
            tight: "-.025em",
            normal: "0",
            wide: ".025em",
            wider: ".5rem",
            widest: "1rem",
        },
        extend: {
            animation: {
                gradient: "gradient 2s linear infinite",
                "spin-slow": "spin 5s linear infinite",
                "bounce-slow": "bounce 2s linear infinite",
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
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=night]"
                    ],
                    neutral: "#4b5563",
                    "base-100": "#1d283a",
                },
            },
        ],
    },
    plugins: [require("daisyui"), require("tailwind-scrollbar")({ nocompatible: true })],
};
