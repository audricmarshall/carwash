import PageHead from "../components/PageHead"
import AreaMap from "../components/AreaMap"
import Reveal from "../components/Reveal"
import Cta from "../components/Cta"

export default function Area({ areas }) {
  return (
    <>
      <PageHead
        title="Zone d'intervention"
        description="Lavage auto à domicile à Toulouse et dans les communes alentour : la carte de la zone couverte."
      />

      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Zone d'intervention</p>
          <h1 className="page-header__title">Là où on vient laver votre voiture</h1>
          <p className="page-header__intro">
            Le déplacement est compris dans chaque formule à l'intérieur de la zone. Un peu plus
            loin ? Dites-le nous dans votre demande, on vous répond avant de confirmer.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Carte de la zone">
        <div className="container">
          {areas.map((area) => (
            <Reveal key={area.id} className="area">
              <h2 className="area__title">{area.name}</h2>
              {area.description && <p className="area__text">{area.description}</p>}
              <AreaMap area={area} />
            </Reveal>
          ))}
          <Reveal className="section__more">
            <Cta href="/reserver">Réserver un lavage</Cta>
          </Reveal>
        </div>
      </section>
    </>
  )
}
