require "rails_helper"

RSpec.describe ServiceArea do
  it "exige un rayon pour une zone mobile" do
    area = described_class.new(name: "Toulouse", kind: :mobile, latitude: 43.6, longitude: 1.44)
    expect(area).not_to be_valid
    area.radius_km = 25
    expect(area).to be_valid
  end

  it "exige une adresse pour une station fixe" do
    station = described_class.new(name: "Station", kind: :station, latitude: 43.6, longitude: 1.44)
    expect(station).not_to be_valid
    station.address = "1 rue du Lavage, Toulouse"
    expect(station).to be_valid
  end
end
