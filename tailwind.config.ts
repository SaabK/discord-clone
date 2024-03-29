import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                darkGrey: "#1e1f22",
                mediumGrey: "#2b2d31",
                grey: "#313338",
                shadeGrey: "#383a40",
                lightGrey: "#949ba4",
                discordBlue: "#5865F2",
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
export default config;
