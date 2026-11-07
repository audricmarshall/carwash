import Cta from "./Cta"
import { formatDuration, formatPrice } from "../lib/format"

export default function PackageCard({ pkg }) {
  const duration = formatDuration(pkg.duration_minutes)

  return (
    <article className={`package-card${pkg.featured ? " package-card--featured" : ""}`}>
      {pkg.featured && <p className="package-card__badge">Notre conseil</p>}
      <h3 className="package-card__title">{pkg.name}</h3>
      {pkg.tagline && <p className="package-card__tagline">{pkg.tagline}</p>}

      <p className="package-card__price">
        {pkg.price_from && <span className="package-card__from">à partir de</span>}
        <strong>{formatPrice(pkg.price_cents)}</strong>
      </p>

      <ul className="package-card__services">
        {pkg.services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>

      {duration && <p className="package-card__duration">Environ {duration} sur place</p>}

      <Cta href={`/reserver?formule=${pkg.slug}`} variant={pkg.featured ? "primary" : "outline"}>
        Réserver cette formule
      </Cta>
    </article>
  )
}
