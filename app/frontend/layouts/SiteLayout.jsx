import { useEffect } from "react"
import { usePage } from "@inertiajs/react"
import { AnimatePresence, MotionConfig, motion } from "motion/react"
import SiteHeader from "../components/SiteHeader"
import SiteFooter from "../components/SiteFooter"
import { setupSmoothScroll } from "../lib/scroll"

const transition = { duration: 0.28, ease: "easeOut" }

export default function SiteLayout({ children }) {
  const { url } = usePage()
  const pageKey = url.split("?")[0]

  useEffect(() => setupSmoothScroll(), [])

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="contenu"
          key={pageKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={transition}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </MotionConfig>
  )
}
