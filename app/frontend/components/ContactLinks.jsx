import { usePage } from "@inertiajs/react"
import { phoneLink, whatsappLink } from "../lib/format"

// téléphone, WhatsApp et e-mail, affichés seulement quand ils sont renseignés dans la configuration
export default function ContactLinks({ className = "" }) {
  const { brand } = usePage().props
  const items = [
    brand.phone && { href: phoneLink(brand.phone), label: brand.phone, kind: "phone" },
    brand.whatsapp && { href: whatsappLink(brand.whatsapp), label: "WhatsApp", kind: "whatsapp" },
    brand.email && { href: `mailto:${brand.email}`, label: brand.email, kind: "email" },
  ].filter(Boolean)

  if (items.length === 0) return null

  return (
    <ul className={`contact-links ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.kind}>
          <a href={item.href} className={`contact-links__item contact-links__item--${item.kind}`}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
