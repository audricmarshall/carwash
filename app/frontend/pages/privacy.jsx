import { usePage } from "@inertiajs/react"
import PageHead from "../components/PageHead"

export default function Privacy() {
  const { brand } = usePage().props

  return (
    <>
      <PageHead title="Politique de confidentialité" />

      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Politique de confidentialité</h1>
          <p className="page-header__intro">
            Ce que ce site collecte, pourquoi, et ce que vous pouvez demander. Pas de traceur
            publicitaire, pas de cookie de mesure d'audience.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Qui traite vos données</h2>
          <p>
            {brand.name}, représenté par {brand.legal.publication_director}
            {brand.email && <>, joignable à {brand.email}</>}.
          </p>

          <h2>Ce qui est collecté</h2>
          <p>
            Uniquement ce que vous saisissez dans les formulaires Réserver et Entreprises : nom,
            téléphone, e-mail, adresse du véhicule, société, et le message que vous écrivez. Aucune
            donnée n'est collectée à votre insu pendant la navigation.
          </p>

          <h2>Pourquoi</h2>
          <p>
            Pour traiter votre demande de lavage ou de devis, vous rappeler, confirmer le créneau et
            vous envoyer la confirmation par e-mail. Base légale : votre consentement, donné en
            cochant la case du formulaire, et les démarches préalables à la prestation.
          </p>

          <h2>Combien de temps</h2>
          <p>
            Les demandes sont conservées le temps de les traiter, puis au plus douze mois après le
            dernier échange, sauf obligation comptable pour les prestations réalisées.
          </p>

          <h2>Qui y a accès</h2>
          <p>
            L'équipe de {brand.name} uniquement. Les données sont hébergées dans l'Union européenne,
            à Francfort, chez notre hébergeur. Elles ne sont ni vendues ni partagées à des fins
            publicitaires.
          </p>

          <h2>Cookies</h2>
          <p>
            Le site n'utilise qu'un cookie technique de session, nécessaire au fonctionnement des
            formulaires. Aucun cookie publicitaire ni de mesure d'audience.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou
            retirer votre consentement, en écrivant à{" "}
            {brand.email || "l'adresse indiquée dans les mentions légales"}. Vous pouvez aussi
            saisir la CNIL, cnil.fr.
          </p>
        </div>
      </section>
    </>
  )
}
