import { Link } from "@inertiajs/react"

// case RGPD : la demande n'est enregistrée que si elle est cochée
export default function ConsentField({ name, error }) {
  const id = name.replace(/[^a-z0-9]+/gi, "-")

  return (
    <div className={`field field--checkbox${error ? " field--error" : ""}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value="1"
        aria-invalid={error ? true : undefined}
      />
      <label htmlFor={id}>
        J'accepte que ces informations servent à traiter ma demande et à me recontacter. Elles ne
        sont ni partagées ni utilisées à d'autres fins (
        <Link href="/confidentialite">en savoir plus</Link>).
      </label>
      {error && <p className="field__error">{error}</p>}
    </div>
  )
}
