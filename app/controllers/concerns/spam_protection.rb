# deux barrières sans captcha : un champ caché que seuls les robots remplissent,
# et un délai minimal entre l'affichage du formulaire et son envoi.
module SpamProtection
  extend ActiveSupport::Concern

  HONEYPOT_FIELD = :website
  MIN_SECONDS_BEFORE_SUBMIT = 3

  private

  def spam?
    params[HONEYPOT_FIELD].present? || submitted_too_fast?
  end

  def submitted_too_fast?
    started_at = params[:started_at].to_i
    started_at.zero? || Time.current.to_i - started_at < MIN_SECONDS_BEFORE_SUBMIT
  end
end
