import { useState } from "react"
import { Link, usePage } from "@inertiajs/react"
import Cta from "./Cta"

export const navigation = [
  { href: "/prestations", label: "Prestations" },
  { href: "/comment-ca-marche", label: "Comment ça marche" },
  { href: "/zone", label: "Zone" },
  { href: "/entreprises", label: "Entreprises" },
  { href: "/a-propos", label: "À propos" },
]

export default function SiteHeader() {
  const { url, props } = usePage()
  // le menu mobile retient l'adresse sur laquelle il a été ouvert : changer de page le referme
  const [openedOn, setOpenedOn] = useState(null)
  const open = openedOn === url

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="site-header__brand">
          {props.brand.name}
        </Link>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpenedOn(open ? null : url)}
        >
          <span className="visually-hidden">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <span className="site-header__burger" aria-hidden="true" />
        </button>

        <nav
          id="navigation"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Navigation principale"
        >
          <ul className="site-nav__list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={url.startsWith(item.href) ? "is-active" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Cta href="/reserver" className="site-nav__cta">
            Réserver
          </Cta>
        </nav>
      </div>
    </header>
  )
}
