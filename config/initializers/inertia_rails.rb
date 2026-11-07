InertiaRails.configure do |config|
  config.version = ViteRuby.digest
  config.always_include_errors_hash = true
  config.use_script_element_for_initial_page = true
  config.use_data_inertia_head_attribute = true
  config.server_head = true
  config.convert_fragment_redirects = true

  # en développement, le serveur Vite rend les pages ; en production, le plugin Puma lance Node
  config.ssr_enabled = !Rails.env.test?
end
