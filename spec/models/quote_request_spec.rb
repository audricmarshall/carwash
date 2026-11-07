require "rails_helper"

RSpec.describe QuoteRequest do
  def build_request(**overrides)
    described_class.new(
      company: "Garage Dupont", name: "Paul Dupont", email: "paul@example.com",
      phone: "+33 6 12 34 56 78", fleet_size: 8, consent: "1", **overrides
    )
  end

  it "est valide avec une société, un contact et le consentement" do
    expect(build_request).to be_valid
  end

  it "exige le nom de la société" do
    expect(build_request(company: "")).not_to be_valid
  end

  it "refuse un nombre de véhicules nul ou négatif" do
    expect(build_request(fleet_size: 0)).not_to be_valid
    expect(build_request(fleet_size: nil)).to be_valid
  end
end
