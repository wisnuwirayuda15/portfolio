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
                "spin-slowest": "spin 100s linear infinite",
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
            {
                light: {
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=light]"
                    ],
                    primary: "#65c3c8",
                    secondary: "#ef9fbc",
                    accent: "#eeaf3a",
                    info: "#3abff8",
                    success: "#36d399",
                    warning: "#fbbd23",
                    error: "#f87272",
                    "--btn-text-case": "normal",
                },
                night: {
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=dark]"
                    ],
                    primary: "#3abff8",
                    secondary: "#828df8",
                    accent: "#f471b5",
                    info: "#0ca6e9",
                    success: "#2bd4bd",
                    warning: "#f4c152",
                    error: "#fb6f84",
                    "--btn-text-case": "normal",
                },
            },
        ],
    },
    plugins: [
        require("daisyui"),
        require("tailwind-scrollbar")({ nocompatible: true }),
    ],
};
