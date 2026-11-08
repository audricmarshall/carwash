# une zone couverte : un rayon autour d'un point pour le lavage mobile,
# une adresse pour une station fixe plus tard.
class ServiceArea < ApplicationRecord
  enum :kind, { mobile: 0, station: 1 }

  validates :name, presence: true
  validates :latitude, numericality: { greater_than_or_equal_to: -90, less_than_or_equal_to: 90 }
  validates :longitude, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
  validates :radius_km, numericality: { only_integer: true, greater_than: 0 }, if: :mobile?
  validates :address, presence: true, if: :station?

  scope :active, -> { where(active: true) }
  scope :ordered, -> { order(:position, :name) }

  PUBLIC_ATTRIBUTES = %i[id name kind latitude longitude radius_km address description].freeze

  def self.for_site
    active.ordered.as_json(only: PUBLIC_ATTRIBUTES)
  end
end
