import { Link, usePage } from "@inertiajs/react"
import PageHead from "../components/PageHead"

export default function Legal() {
  const { brand } = usePage().props
  const legal = brand.legal

  return (
    <>
      <PageHead title="Mentions légales" />

      <section className="page-header">
        <div className="container">
          <h1 className="page-header__title">Mentions légales</h1>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Éditeur du site</h2>
          {legal.company_name ? (
            <p>
              {legal.company_name}
              {legal.legal_form && `, ${legal.legal_form}`}
              {legal.siret && <>, SIRET {legal.siret}</>}
              {legal.address && <>, {legal.address}</>}.
            </p>
          ) : (
            <p>
              {brand.name}, société en cours de création. La forme juridique, le numéro SIRET et
              l'adresse du siège seront publiés ici dès l'immatriculation.
            </p>
          )}
          <p>Directeur de la publication : {legal.publication_director}.</p>
          {(brand.email || brand.phone) && (
            <p>
              Contact : {brand.email}
              {brand.email && brand.phone && ", "}
              {brand.phone}.
            </p>
          )}

          <h2>Hébergement</h2>
          <p>
            {legal.host ||
              "Render Services, Inc., 525 Brannan Street, Suite 300, San Francisco, CA 94107, États-Unis. Serveurs situés à Francfort, Allemagne."}
          </p>

          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, le logo et les illustrations de ce site appartiennent à {brand.name}. Toute
            reproduction sans accord écrit est interdite.
          </p>

          <h2>Données personnelles</h2>
          <p>
            Les informations envoyées par les formulaires servent uniquement à traiter votre
            demande. Le détail est dans la{" "}
            <Link href="/confidentialite">politique de confidentialité</Link>.
          </p>

          <h2>Réalisation</h2>
          <p>
            <a href={brand.credits.url}>{brand.credits.label}</a>.
          </p>
        </div>
      </section>
    </>
  )
}
