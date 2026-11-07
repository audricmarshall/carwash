require "rails_helper"

RSpec.describe BookingRequest do
  def build_request(**overrides)
    described_class.new(
      name: " Jeanne  Martin ", email: "Jeanne@Example.com", phone: "06 12 34 56 78",
      address: "12 rue des Lilas", postcode: "31 200", city: "Toulouse",
      preferred_date: Date.tomorrow, consent: "1", **overrides
    )
  end

  it "est valide avec les champs obligatoires et le consentement" do
    expect(build_request).to be_valid
  end

  it "normalise le nom, l'e-mail et le code postal" do
    request = build_request
    request.valid?
    expect(request.name).to eq("Jeanne Martin")
    expect(request.email).to eq("jeanne@example.com")
    expect(request.postcode).to eq("31200")
  end

  it "refuse une demande sans consentement" do
    expect(build_request(consent: nil)).not_to be_valid
    expect(build_request(consent: "0")).not_to be_valid
  end

  it "refuse une date déjà passée" do
    request = build_request(preferred_date: Date.yesterday)
    expect(request).not_to be_valid
    expect(request.errors[:preferred_date]).to be_present
  end

  it "refuse un code postal ou un téléphone mal formés" do
    expect(build_request(postcode: "3120")).not_to be_valid
    expect(build_request(phone: "appelez-moi")).not_to be_valid
  end

  it "horodate le consentement à l'enregistrement" do
    request = build_request
    request.save!
    expect(request.consent_at).to be_present
    expect(request).to be_received
  end
end
