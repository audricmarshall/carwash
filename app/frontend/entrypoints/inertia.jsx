import { createInertiaApp } from "@inertiajs/react"
import SiteLayout from "../layouts/SiteLayout"
import "@fontsource-variable/manrope"
import "../styles/main.scss"

createInertiaApp({
  pages: "../pages",
  layout: () => SiteLayout,
  serverHead: true,
  progress: { color: "#1aa7c9" },
})
