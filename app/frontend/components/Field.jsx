// un champ de formulaire avec son libellé, son aide et son message d'erreur
export default function Field({ label, name, error, hint, required, children, ...input }) {
  const id = name.replace(/[^a-z0-9]+/gi, "-")
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined

  return (
    <div className={`field${error ? " field--error" : ""}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {required ? " *" : ""}
      </label>
      {children ? (
        children({
          id,
          name,
          required,
          "aria-invalid": error ? true : undefined,
          "aria-describedby": describedBy,
        })
      ) : (
        <input
          id={id}
          name={name}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...input}
        />
      )}
      {hint && (
        <p id={`${id}-hint`} className="field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="field__error">
          {error}
        </p>
      )}
    </div>
  )
}
