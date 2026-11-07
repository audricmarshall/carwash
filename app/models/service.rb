# Une prestation unitaire : prélavage, jantes, aspiration...
class Service < ApplicationRecord
  include Sluggable

  enum :category, { exterior: 0, interior: 1, extra: 2 }, prefix: true

  has_many :package_services, dependent: :destroy
  has_many :packages, through: :package_services

  validates :name, presence: true, uniqueness: true
  validates :category, presence: true

  scope :active, -> { where(active: true) }
  scope :ordered, -> { order(:position, :name) }

  PUBLIC_ATTRIBUTES = %i[id slug name description category].freeze

  def self.for_site
    active.ordered.as_json(only: PUBLIC_ATTRIBUTES)
  end
end
