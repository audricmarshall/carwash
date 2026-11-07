import { useEffect, useRef } from "react"
import { revealOnScroll } from "../lib/scroll"

// apparition au défilement ; le contenu reste visible sans JavaScript
export default function Reveal({ as: Tag = "div", delay = 0, className, children }) {
  const ref = useRef(null)

  useEffect(() => revealOnScroll(ref.current, { delay }), [delay])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
