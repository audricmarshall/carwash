import { Link, usePage } from "@inertiajs/react"
import ContactLinks from "./ContactLinks"
import { navigation } from "./SiteHeader"

export default function SiteFooter() {
  const { brand } = usePage().props

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="site-footer__brand">{brand.name}</p>
          <p className="site-footer__baseline">{brand.baseline}</p>
        </div>

        <nav aria-label="Pages du site">
          <ul className="site-footer__links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/reserver">Réserver</Link>
            </li>
          </ul>
        </nav>

        <ContactLinks className="site-footer__contact" />
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {new Date().getFullYear()} {brand.name}
        </p>
        <ul className="site-footer__legal">
          <li>
            <Link href="/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link href="/confidentialite">Confidentialité</Link>
          </li>
        </ul>
        <a href={brand.credits.url} rel="noopener">
          {brand.credits.label}
        </a>
      </div>
    </footer>
  )
}
