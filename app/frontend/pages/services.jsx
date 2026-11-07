import PageHead from "../components/PageHead"
import PackageCard from "../components/PackageCard"
import Reveal from "../components/Reveal"
import Cta from "../components/Cta"

const categories = [
  { key: "exterior", title: "Extérieur" },
  { key: "interior", title: "Intérieur" },
  { key: "extra", title: "En option" },
]

export default function Services({ packages, services }) {
  return (
    <>
      <PageHead
        title="Prestations et tarifs"
        description="Formules extérieur, intérieur ou complète, et le détail de chaque prestation : prélavage, jantes, aspiration, plastiques, shampoing sièges."
      />

      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Prestations et tarifs</p>
          <h1 className="page-header__title">Ce qu'on fait, et à quel prix</h1>
          <p className="page-header__intro">
            Trois formules pour aller vite, et chaque geste détaillé en dessous. Le déplacement est
            compris. Tarifs indicatifs, confirmés à la réservation.
          </p>
        </div>
      </section>

      <section className="section section--mist" aria-label="Formules">
        <div className="container">
          <div className="package-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="detail-titre">
        <div className="container">
          <Reveal className="section__header">
            <h2 id="detail-titre" className="section__title">
              Le détail des prestations
            </h2>
          </Reveal>
          {categories.map((category) => {
            const items = services.filter((service) => service.category === category.key)
            if (items.length === 0) return null

            return (
              <Reveal key={category.key} className="service-group">
                <h3 className="service-group__title">{category.title}</h3>
                <dl className="service-list">
                  {items.map((service) => (
                    <div className="service-list__item" key={service.id}>
                      <dt>{service.name}</dt>
                      {service.description && <dd>{service.description}</dd>}
                    </div>
                  ))}
                </dl>
              </Reveal>
            )
          })}
          <Reveal className="section__more">
            <Cta href="/reserver">Réserver un lavage</Cta>
          </Reveal>
        </div>
      </section>
    </>
  )
}
