import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { prefersReducedMotion } from "./motion"
import "lenis/dist/lenis.css"

// défilement lissé par Lenis, synchronisé avec ScrollTrigger pour les animations au scroll
export function setupSmoothScroll() {
  if (prefersReducedMotion()) return undefined

  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({ autoRaf: false })
  const tick = (time) => lenis.raf(time * 1000)

  lenis.on("scroll", ScrollTrigger.update)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(tick)
    lenis.destroy()
  }
}

export function revealOnScroll(element, options = {}) {
  if (!element || prefersReducedMotion()) return undefined

  gsap.registerPlugin(ScrollTrigger)

  const tween = gsap.from(element, {
    autoAlpha: 0,
    y: 24,
    duration: 0.7,
    ease: "power2.out",
    delay: options.delay ?? 0,
    scrollTrigger: { trigger: element, start: "top 88%", once: true },
  })

  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}
