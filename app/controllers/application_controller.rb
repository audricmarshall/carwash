class ApplicationController < ActionController::Base
  inertia_share brand: -> { Brand.to_props }

  private

  # horodatage glissé dans les formulaires pour écarter les envois instantanés des robots
  def form_started_at
    Time.current.to_i
  end

  # un seul message par champ, prêt à afficher sous l'input
  def form_errors(record)
    record.errors.to_hash(true).transform_values(&:first)
  end
end
