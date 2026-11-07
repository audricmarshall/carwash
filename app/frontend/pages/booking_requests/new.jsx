import { Form, usePage } from "@inertiajs/react"
import PageHead from "../../components/PageHead"
import Field from "../../components/Field"
import ConsentField from "../../components/ConsentField"
import AntiSpamFields from "../../components/AntiSpamFields"
import ContactLinks from "../../components/ContactLinks"
import { formatPrice } from "../../lib/format"

const today = () => new Date().toISOString().slice(0, 10)

export default function NewBookingRequest({
  packages,
  preferred_periods,
  selected_package,
  started_at,
}) {
  const { brand } = usePage().props
  const selected = packages.find((pkg) => pkg.slug === selected_package)

  return (
    <>
      <PageHead
        title="Réserver"
        description={`Réservez un lavage à domicile ou au travail avec ${brand.name}. Formule, adresse, moment souhaité : on vous rappelle pour confirmer.`}
      />

      <section className="page-header">
        <div className="container">
          <p className="section__eyebrow">Réserver</p>
          <h1 className="page-header__title">Dites-nous où et quand</h1>
          <p className="page-header__intro">
            Deux minutes suffisent. On vous rappelle pour confirmer le créneau et le tarif.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Formulaire de réservation">
        <div className="container booking">
          <Form action="/reserver" method="post" className="form booking__form">
            {({ errors, processing }) => (
              <>
                <AntiSpamFields startedAt={started_at} />

                <fieldset className="form__group">
                  <legend>Le lavage</legend>

                  <Field
                    label="Formule"
                    name="booking_request[package_id]"
                    error={errors.package_id}
                  >
                    {(props) => (
                      <select {...props} defaultValue={selected ? String(selected.id) : ""}>
                        <option value="">Je ne sais pas encore</option>
                        {packages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name}, {pkg.price_from ? "à partir de " : ""}
                            {formatPrice(pkg.price_cents)}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>

                  <Field
                    label="Véhicule"
                    name="booking_request[vehicle]"
                    error={errors.vehicle}
                    hint="Marque et modèle, par exemple Peugeot 208."
                    autoComplete="off"
                  />

                  <div className="form__row">
                    <Field
                      label="Date souhaitée"
                      name="booking_request[preferred_date]"
                      type="date"
                      min={today()}
                      error={errors.preferred_date}
                    />
                    <Field
                      label="Moment de la journée"
                      name="booking_request[preferred_period]"
                      error={errors.preferred_period}
                    >
                      {(props) => (
                        <select {...props} defaultValue="flexible">
                          {preferred_periods.map((period) => (
                            <option key={period.value} value={period.value}>
                              {period.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </Field>
                  </div>
                </fieldset>

                <fieldset className="form__group">
                  <legend>L'adresse du véhicule</legend>

                  <Field
                    label="Adresse"
                    name="booking_request[address]"
                    required
                    error={errors.address}
                    autoComplete="street-address"
                  />
                  <div className="form__row">
                    <Field
                      label="Code postal"
                      name="booking_request[postcode]"
                      required
                      inputMode="numeric"
                      autoComplete="postal-code"
                      error={errors.postcode}
                    />
                    <Field
                      label="Ville"
                      name="booking_request[city]"
                      required
                      autoComplete="address-level2"
                      error={errors.city}
                    />
                  </div>
                </fieldset>

                <fieldset className="form__group">
                  <legend>Vos coordonnées</legend>

                  <Field
                    label="Nom"
                    name="booking_request[name]"
                    required
                    autoComplete="name"
                    error={errors.name}
                  />
                  <div className="form__row">
                    <Field
                      label="Téléphone"
                      name="booking_request[phone]"
                      type="tel"
                      required
                      autoComplete="tel"
                      error={errors.phone}
                    />
                    <Field
                      label="E-mail"
                      name="booking_request[email]"
                      type="email"
                      required
                      autoComplete="email"
                      error={errors.email}
                    />
                  </div>
                  <Field
                    label="Message"
                    name="booking_request[message]"
                    error={errors.message}
                    hint="Accès au parking, état du véhicule, demande particulière."
                  >
                    {(props) => <textarea {...props} rows={4} />}
                  </Field>
                </fieldset>

                <ConsentField name="booking_request[consent]" error={errors.consent} />

                <button
                  type="submit"
                  className="button button--primary button--large"
                  disabled={processing}
                >
                  {processing ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </>
            )}
          </Form>

          <aside className="booking__aside">
            <h2 className="booking__aside-title">Vous préférez nous parler ?</h2>
            <p>Un appel ou un message, et on cale le créneau ensemble.</p>
            <ContactLinks />
            <p className="booking__aside-note">
              Vos informations ne servent qu'à traiter votre demande. Aucun traceur publicitaire sur
              ce site.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
