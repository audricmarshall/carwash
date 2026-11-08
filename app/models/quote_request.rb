# une demande de devis envoyée par une entreprise : parking, concession, loueur.
class QuoteRequest < ApplicationRecord
  include ContactRequest

  validates :company, presence: true, length: { maximum: 160 }
  validates :city, length: { maximum: 100 }
  validates :fleet_size, numericality: { only_integer: true, greater_than: 0 }, allow_nil: true
end
