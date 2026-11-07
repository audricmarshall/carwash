import PageHead from "../components/PageHead"
import Steps from "../components/Steps"
import Reveal from "../components/Reveal"
import Cta from "../components/Cta"

const details = [
  {
    title: "Où peut-on intervenir ?",
    text: "Devant chez vous, dans votre résidence ou sur le parking de votre entreprise, dès lors qu'on peut stationner le Kangoo à côté de votre véhicule.",
  },
  {
    title: "Faut-il être présent ?",
    text: "Au début et à la fin, pour nous donner l'accès au véhicule et le récupérer. Entre les deux, vous faites ce que vous voulez.",
  },
  {
    title: "Combien de temps ça prend ?",
    text: "De 45 minutes pour un extérieur à environ 1 h 30 pour une formule complète. La durée exacte dépend de l'état du véhicule.",
  },
  {
    title: "Quels véhicules ?",
    text: "Citadines, berlines, SUV et utilitaires légers. Pour un véhicule hors gabarit, précisez-le dans votre demande.",
  },
]

export default function HowItWorks() {
  return (
    <>
      <PageHead
        title="Comment ça marche"
        description="Réservation, intervention sur place, véhicule rendu propre : le déroulé d'un lavage à domicile, étape par étape."
      />

      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Comment ça marche</p>
          <h1 className="page-header__title">Vous réservez, on vient, c'est propre</h1>
          <p className="page-header__intro">
            Pas de file d'attente à la station, pas de voiture à déposer. On se déplace avec le
            matériel et on repart quand le véhicule est nettoyé.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Les trois étapes">
        <div className="container">
          <Steps />
        </div>
      </section>

      <section className="section section--mist" aria-labelledby="questions-titre">
        <div className="container">
          <Reveal className="section__header">
            <h2 id="questions-titre" className="section__title">
              Les questions qu'on nous pose
            </h2>
          </Reveal>
          <div className="qa-grid">
            {details.map((item, index) => (
              <Reveal key={item.title} className="qa" delay={index * 0.05}>
                <h3 className="qa__title">{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="section__more">
            <Cta href="/reserver">Réserver un lavage</Cta>
          </Reveal>
        </div>
      </section>
    </>
  )
}
