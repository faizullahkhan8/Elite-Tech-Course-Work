// tailwind.config.js
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#CFA663",
                bg: "#F4F4F4",
                secondaryBg: "#FFFFFF",
                darkBg: "#1E1E1E",
            },
        },
    },
};
