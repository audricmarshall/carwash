import { Form } from "@inertiajs/react"
import PageHead from "../../components/PageHead"
import Field from "../../components/Field"
import ConsentField from "../../components/ConsentField"
import AntiSpamFields from "../../components/AntiSpamFields"
import Reveal from "../../components/Reveal"

const reasons = [
  {
    title: "Sur votre parking",
    text: "On intervient pendant les heures de bureau, sans immobiliser vos véhicules ni vos équipes.",
  },
  {
    title: "Au rythme qui vous convient",
    text: "Un passage ponctuel ou des rendez-vous réguliers, avec un interlocuteur direct et un planning clair.",
  },
  {
    title: "Une flotte présentable",
    text: "Voitures de direction, utilitaires, véhicules de démonstration ou de location : leur propreté, c'est votre image.",
  },
]

export default function NewQuoteRequest({ started_at }) {
  return (
    <>
      <PageHead
        title="Entreprises et flottes"
        description="Lavage de véhicules sur parking d'entreprise, en concession ou chez un loueur. Demandez un devis."
      />

      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Entreprises et flottes</p>
          <h1 className="page-header__title">Vos véhicules lavés sur place</h1>
          <p className="page-header__intro">
            Parkings d'entreprise, concessions, loueurs, artisans : dites-nous combien de véhicules
            et à quel rythme, on revient vers vous avec un devis.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Demande de devis">
        <div className="container booking">
          <Form action="/entreprises" method="post" className="form booking__form">
            {({ errors, processing }) => (
              <>
                <AntiSpamFields startedAt={started_at} />

                <fieldset className="form__group">
                  <legend>Votre société</legend>
                  <Field
                    label="Société"
                    name="quote_request[company]"
                    required
                    autoComplete="organization"
                    error={errors.company}
                  />
                  <div className="form__row">
                    <Field
                      label="Ville"
                      name="quote_request[city]"
                      autoComplete="address-level2"
                      error={errors.city}
                    />
                    <Field
                      label="Nombre de véhicules"
                      name="quote_request[fleet_size]"
                      type="number"
                      min={1}
                      inputMode="numeric"
                      error={errors.fleet_size}
                    />
                  </div>
                </fieldset>

                <fieldset className="form__group">
                  <legend>Votre contact</legend>
                  <Field
                    label="Nom"
                    name="quote_request[name]"
                    required
                    autoComplete="name"
                    error={errors.name}
                  />
                  <div className="form__row">
                    <Field
                      label="Téléphone"
                      name="quote_request[phone]"
                      type="tel"
                      required
                      autoComplete="tel"
                      error={errors.phone}
                    />
                    <Field
                      label="E-mail"
                      name="quote_request[email]"
                      type="email"
                      required
                      autoComplete="email"
                      error={errors.email}
                    />
                  </div>
                  <Field
                    label="Votre besoin"
                    name="quote_request[message]"
                    error={errors.message}
                    hint="Types de véhicules, fréquence souhaitée, contraintes d'accès au parking."
                  >
                    {(props) => <textarea {...props} rows={5} />}
                  </Field>
                </fieldset>

                <ConsentField name="quote_request[consent]" error={errors.consent} />

                <button
                  type="submit"
                  className="button button--primary button--large"
                  disabled={processing}
                >
                  {processing ? "Envoi en cours..." : "Demander un devis"}
                </button>
              </>
            )}
          </Form>

          <aside className="booking__aside">
            {reasons.map((item, index) => (
              <Reveal key={item.title} className="booking__aside-block" delay={index * 0.05}>
                <h2 className="booking__aside-title">{item.title}</h2>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}
