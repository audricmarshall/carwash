import PageHead from "../../components/PageHead"
import Cta from "../../components/Cta"

export default function QuoteRequestThanks() {
  return (
    <>
      <PageHead title="Demande de devis envoyée" />
      <section className="page-header page-header--center">
        <div className="container">
          <p className="section__eyebrow">Merci</p>
          <h1 className="page-header__title">Votre demande de devis est bien reçue</h1>
          <p className="page-header__intro">
            On vous rappelle pour préciser vos besoins, puis vous recevez une proposition chiffrée.
          </p>
          <Cta href="/" variant="outline">
            Retour à l'accueil
          </Cta>
        </div>
      </section>
    </>
  )
}
