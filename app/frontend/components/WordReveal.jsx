import { useEffect, useRef } from "react"
import gsap from "gsap"
import { prefersReducedMotion } from "../lib/motion"

// titre révélé mot par mot ; sans JavaScript, le titre est simplement affiché
export default function WordReveal({ as: Tag = "h1", text, className }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return undefined

    const tween = gsap.from(ref.current.querySelectorAll(".word > span"), {
      yPercent: 110,
      opacity: 0,
      duration: 0.8,
      stagger: 0.07,
      ease: "power3.out",
      delay: 0.15,
    })

    return () => tween.kill()
  }, [])

  return (
    <Tag ref={ref} className={className}>
      {text.split(" ").map((word, index) => (
        <span className="word" key={`${word}-${index}`}>
          <span>{word}</span>
        </span>
      ))}
    </Tag>
  )
}
