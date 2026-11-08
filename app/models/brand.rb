# identité du site lue dans config/brand.yml : nom, contact, équipe, mentions légales.
class Brand
  class << self
    def config
      Rails.configuration.x.brand.to_h.deep_symbolize_keys
    end

    def name
      config[:name]
    end

    def email
      config[:email].presence
    end

    def notification_email
      ENV["NOTIFY_EMAIL"].presence || email
    end

    def to_props
      config
    end

    # données structurées de commerce local pour Google, sans aucun champ inventé
    def structured_data(base_url)
      data = {
        "@context" => "https://schema.org",
        "@type" => "AutoWash",
        "name" => name,
        "description" => config[:baseline],
        "url" => base_url,
        "image" => "#{base_url}/og-image.png",
        "areaServed" => config[:city],
        "priceRange" => "€€"
      }
      data["telephone"] = config[:phone] if config[:phone].present?
      data["email"] = email if email
      data["address"] = { "@type" => "PostalAddress", "streetAddress" => config.dig(:legal, :address), "addressLocality" => config[:city], "addressCountry" => "FR" } if config.dig(:legal, :address).present?
      data
    end
  end
end
