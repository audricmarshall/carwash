import { useEffect, useRef } from "react"

// carte OpenStreetMap avec le rayon couvert ; Leaflet n'est chargé que dans le navigateur
export default function AreaMap({ area, className = "" }) {
  const ref = useRef(null)

  useEffect(() => {
    let map
    let cancelled = false

    Promise.all([import("leaflet"), import("leaflet/dist/leaflet.css")]).then(([module]) => {
      if (cancelled || !ref.current) return

      const L = module.default ?? module
      const center = [Number(area.latitude), Number(area.longitude)]

      map = L.map(ref.current, { scrollWheelZoom: false })
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      const zone = L.circle(center, {
        radius: (area.radius_km || 1) * 1000,
        color: "#0d7fa0",
        weight: 2,
        fillColor: "#1aa7c9",
        fillOpacity: 0.18,
      }).addTo(map)

      L.circleMarker(center, {
        radius: 6,
        color: "#0b1b2b",
        fillColor: "#0b1b2b",
        fillOpacity: 1,
      }).addTo(map)

      map.fitBounds(zone.getBounds(), { padding: [20, 20] })
    })

    return () => {
      cancelled = true
      map?.remove()
    }
  }, [area])

  return (
    <div
      ref={ref}
      className={`area-map ${className}`.trim()}
      role="img"
      aria-label={`Carte de la zone couverte : ${area.name}`}
    />
  )
}
