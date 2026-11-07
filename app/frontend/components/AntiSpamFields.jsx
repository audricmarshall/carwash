// champ piège invisible pour les robots et horodatage d'ouverture du formulaire
export default function AntiSpamFields({ startedAt }) {
  return (
    <>
      <input type="hidden" name="started_at" value={startedAt} />
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Site web</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
    </>
  )
}
