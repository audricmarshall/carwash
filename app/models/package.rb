# Une formule vendue au client : un nom, un prix, une durée et la liste des prestations incluses.
class Package < ApplicationRecord
  include Sluggable

  has_many :package_services, -> { order(:position) }, dependent: :destroy
  has_many :services, through: :package_services
  has_many :booking_requests, dependent: :nullify

  validates :name, presence: true, uniqueness: true
  validates :price_cents, numericality: { only_integer: true, greater_than: 0 }
  validates :duration_minutes, numericality: { only_integer: true, greater_than: 0 }, allow_nil: true

  scope :active, -> { where(active: true) }
  scope :ordered, -> { order(:position, :name) }

  PUBLIC_ATTRIBUTES = %i[id slug name tagline description price_cents price_from duration_minutes featured].freeze

  def self.for_site
    active.ordered.includes(:services).as_json(
      only: PUBLIC_ATTRIBUTES,
      include: { services: { only: %i[id slug name category] } }
    )
  end

  def price
    price_cents / 100.0
  end

  def price=(euros)
    self.price_cents = (BigDecimal(euros.to_s) * 100).round
  end
end
