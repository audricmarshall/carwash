module Sluggable
  extend ActiveSupport::Concern

  included do
    before_validation :assign_slug
    validates :slug, presence: true, uniqueness: true
  end

  def to_param
    slug
  end

  private

  def assign_slug
    self.slug = name.to_s.parameterize if slug.blank? && name.present?
  end
end
