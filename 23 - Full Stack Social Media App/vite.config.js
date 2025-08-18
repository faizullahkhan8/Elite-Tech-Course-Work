import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    dist: {
        chunkSizeWarningLimit: 1000, // optional: suppresses >500kb warnings
        rollupOptions: {
            output: {
                manualChunks: {
                    // ✅ Code-splitting for smaller chunks
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
