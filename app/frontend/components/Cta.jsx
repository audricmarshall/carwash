import { Link } from "@inertiajs/react"
import { motion } from "motion/react"

const MotionLink = motion.create(Link)
const spring = { type: "spring", stiffness: 500, damping: 30 }

// bouton d'action : lien Inertia pour les pages du site, ancre ou lien externe sinon
export default function Cta({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `button button--${variant} ${className}`.trim()
  const motionProps = { whileHover: { y: -2 }, whileTap: { scale: 0.97 }, transition: spring }
  const external = href.startsWith("#") || href.startsWith("http") || href.startsWith("tel:")

  if (external) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <MotionLink href={href} className={classes} {...motionProps} {...props}>
      {children}
    </MotionLink>
  )
}
