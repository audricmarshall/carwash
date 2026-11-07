# Une demande de réservation envoyée depuis la page Réserver. Le créneau est confirmé par téléphone.
class BookingRequest < ApplicationRecord
  include ContactRequest

  belongs_to :package, optional: true

  enum :preferred_period, { morning: 0, afternoon: 1, evening: 2, flexible: 3 }, default: :flexible

  normalizes :postcode, with: ->(postcode) { postcode.delete(" ") }

  validates :address, presence: true, length: { maximum: 200 }
  validates :postcode, presence: true, format: { with: /\A\d{5}\z/ }
  validates :city, presence: true, length: { maximum: 100 }
  validates :vehicle, length: { maximum: 120 }
  validate :preferred_date_is_not_past

  def self.preferred_period_options
    preferred_periods.keys.map do |key|
      { value: key, label: I18n.t("activerecord.attributes.booking_request.preferred_periods.#{key}") }
    end
  end

  private

  def preferred_date_is_not_past
    return if preferred_date.blank? || preferred_date >= Date.current

    errors.add(:preferred_date, :in_the_past)
  end
end
