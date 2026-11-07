import { Link, usePage } from "@inertiajs/react"
import PageHead from "../components/PageHead"
import Cta from "../components/Cta"
import WordReveal from "../components/WordReveal"
import Steps from "../components/Steps"
import PackageCard from "../components/PackageCard"
import Reveal from "../components/Reveal"
import VanIllustration from "../components/VanIllustration"
import AreaMap from "../components/AreaMap"

export default function Home({ packages, areas }) {
  const { brand } = usePage().props

  return (
    <>
      <PageHead
        description={`${brand.name} lave votre voiture à domicile ou sur votre lieu de travail, à ${brand.city} et autour. Réservation en ligne, confirmation par téléphone.`}
      />

      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">Lavage auto à domicile, {brand.city} et périphérie</p>
            <WordReveal
              className="hero__title"
              text="Une voiture propre, sans bouger de chez vous."
            />
            <p className="hero__lead">
              On vient laver votre voiture là où elle est garée : devant chez vous ou sur votre
              parking au travail. Prélavage, carrosserie, jantes, intérieur. Vous réservez, on
              s'occupe du reste.
            </p>
            <div className="hero__actions">
              <Cta href="/reserver">Réserver un lavage</Cta>
              <Cta href="#formules" variant="ghost">
                Voir les formules
              </Cta>
            </div>
            <p className="hero__note">
              Réservation en deux minutes, créneau confirmé par téléphone.
            </p>
          </div>
          <div className="hero__visual">
            <VanIllustration label={brand.name} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="comment-titre">
        <div className="container">
          <Reveal className="section__header">
            <p className="section__eyebrow">Comment ça marche</p>
            <h2 id="comment-titre" className="section__title">
              Trois étapes, zéro déplacement
            </h2>
          </Reveal>
          <Steps />
          <Reveal className="section__more">
            <Link href="/comment-ca-marche">Le déroulé en détail</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--mist" id="formules" aria-labelledby="formules-titre">
        <div className="container">
          <Reveal className="section__header">
            <p className="section__eyebrow">Formules et tarifs</p>
            <h2 id="formules-titre" className="section__title">
              Extérieur, intérieur ou les deux
            </h2>
            <p className="section__intro">
              Chaque formule comprend le déplacement. Tarifs indicatifs, confirmés à la réservation.
            </p>
          </Reveal>
          <div className="package-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
          <Reveal className="section__more">
            <Link href="/prestations">Le détail des prestations</Link>
          </Reveal>
        </div>
      </section>

      {areas.length > 0 && (
        <section className="section" aria-labelledby="zone-titre">
          <div className="container">
            <Reveal className="section__header">
              <p className="section__eyebrow">Zone d'intervention</p>
              <h2 id="zone-titre" className="section__title">
                {areas[0].name}
              </h2>
              {areas[0].description && <p className="section__intro">{areas[0].description}</p>}
            </Reveal>
            <Reveal>
              <AreaMap area={areas[0]} />
            </Reveal>
            <Reveal className="section__more">
              <Link href="/zone">La zone en détail</Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section section--ink" aria-labelledby="entreprises-titre">
        <div className="container">
          <Reveal className="section__header">
            <p className="section__eyebrow">Entreprises et flottes</p>
            <h2 id="entreprises-titre" className="section__title">
              Vos véhicules lavés sur votre parking
            </h2>
            <p className="section__intro">
              Parkings d'entreprise, concessions, loueurs : on intervient sur place, pendant les
              heures de bureau, sur un ou plusieurs véhicules. Devis gratuit, adapté à votre flotte.
            </p>
          </Reveal>
          <Reveal>
            <Cta href="/entreprises" variant="light">
              Demander un devis
            </Cta>
          </Reveal>
        </div>
      </section>
    </>
  )
}
