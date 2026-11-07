require_relative "boot"

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"

Bundler.require(*Rails.groups)

module Carwash
  class Application < Rails::Application
    config.load_defaults 8.1

    config.autoload_lib(ignore: %w[tasks])

    config.time_zone = "Paris"
    config.i18n.default_locale = :fr
    config.i18n.available_locales = [ :fr ]

    config.x.brand = config_for(:brand)

    config.generators do |g|
      g.test_framework :rspec, fixtures: false, view_specs: false, helper_specs: false, routing_specs: false
      g.helper false
      g.assets false
    end
  end
end
