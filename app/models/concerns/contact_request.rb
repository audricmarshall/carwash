# Règles communes aux demandes envoyées depuis le site : réservation et devis.
module ContactRequest
  extend ActiveSupport::Concern

  PHONE_FORMAT = /\A\+?[\d\s().-]{9,20}\z/

  included do
    enum :status, { received: 0, contacted: 1, confirmed: 2, done: 3, cancelled: 4 }, default: :received

    normalizes :email, with: ->(email) { email.strip.downcase }
    normalizes :phone, with: ->(phone) { phone.strip }
    normalizes :name, with: ->(name) { name.squish }

    validates :name, presence: true, length: { maximum: 120 }
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, length: { maximum: 254 }
    validates :phone, presence: true, format: { with: PHONE_FORMAT }
    validates :message, length: { maximum: 2000 }
    validates :consent, acceptance: { allow_nil: false }

    before_save :stamp_consent
  end

  private

  def stamp_consent
    self.consent_at ||= Time.current if consent
  end
end
