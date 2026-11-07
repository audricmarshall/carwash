import PageHead from "../../components/PageHead"
import Cta from "../../components/Cta"

export default function BookingRequestThanks() {
  return (
    <>
      <PageHead title="Demande envoyée" />
      <section className="page-header page-header--center">
        <div className="container">
          <p className="section__eyebrow">Merci</p>
          <h1 className="page-header__title">Votre demande est bien reçue</h1>
          <p className="page-header__intro">
            Un e-mail de confirmation vient de partir. On vous rappelle pour fixer le créneau et
            confirmer le tarif.
          </p>
          <Cta href="/" variant="outline">
            Retour à l'accueil
          </Cta>
        </div>
      </section>
    </>
  )
}
