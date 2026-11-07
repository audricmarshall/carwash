require "rails_helper"

RSpec.describe Package do
  it "génère son identifiant à partir du nom" do
    package = described_class.create!(name: "Lavage Extérieur", price: 29)
    expect(package.slug).to eq("lavage-exterieur")
    expect(package.price_cents).to eq(2900)
  end

  it "refuse un prix nul" do
    expect(described_class.new(name: "Gratuit", price_cents: 0)).not_to be_valid
  end

  it "expose ses prestations dans l'ordre pour le site" do
    package = described_class.create!(name: "Complet", price: 59)
    second = Service.create!(name: "Jantes", category: :exterior)
    first = Service.create!(name: "Prélavage", category: :exterior)
    package.package_services.create!(service: second, position: 2)
    package.package_services.create!(service: first, position: 1)

    names = described_class.for_site.first["services"].map { |service| service["name"] }
    expect(names).to eq([ "Prélavage", "Jantes" ])
  end
end
