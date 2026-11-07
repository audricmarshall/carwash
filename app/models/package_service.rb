class PackageService < ApplicationRecord
  belongs_to :package
  belongs_to :service

  validates :service_id, uniqueness: { scope: :package_id }
end
