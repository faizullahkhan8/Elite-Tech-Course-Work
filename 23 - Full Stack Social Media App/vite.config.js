import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "dist", // ✅ keep Vite default, tell Vercel to use "dist"
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ["react", "react-dom"],
                    firebase: [
                        "firebase/app",
                        "firebase/auth",
                        "firebase/firestore",
                    ],
                },
            },
        },
    },
});
