import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
    assetsInclude: ["./src/assets/**/*.*"],
    build: {
        emptyOutDir: true,
        outDir: "../dist"
    },
		plugins: [react()],
})
