import { defineConfig } from "vite"
import ruby from "vite-plugin-ruby"
import inertia from "@inertiajs/vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [ruby(), inertia({ ssr: { entry: "entrypoints/inertia.jsx" } }), react()],
})
