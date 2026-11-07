require "rails_helper"

RSpec.describe "Réservation", type: :request do
  let(:valid_params) do
    {
      started_at: 10.seconds.ago.to_i,
      booking_request: {
        name: "Jeanne Martin", email: "jeanne@example.com", phone: "0612345678",
        address: "12 rue des Lilas", postcode: "31200", city: "Toulouse", consent: "1"
      }
    }
  end

  it "affiche le formulaire" do
    get new_booking_request_path
    expect(response).to have_http_status(:ok)
  end

  it "enregistre la demande, envoie le mail et redirige vers la page de remerciement" do
    expect {
      post booking_requests_path, params: valid_params, as: :json
    }.to change(BookingRequest, :count).by(1).and have_enqueued_mail(BookingRequestMailer, :confirmation)

    expect(response).to redirect_to(booking_request_thanks_path)
  end

  it "renvoie au formulaire avec les erreurs quand la demande est incomplète" do
    params = valid_params.deep_merge(booking_request: { phone: "", consent: "0" })

    expect { post booking_requests_path, params: params, as: :json }.not_to change(BookingRequest, :count)
    expect(response).to redirect_to(new_booking_request_path)
    expect(session[:inertia_errors].keys.map(&:to_s)).to include("phone", "consent")
  end

  it "ignore les envois des robots sans rien enregistrer" do
    expect {
      post booking_requests_path, params: valid_params.merge(website: "http://spam.example"), as: :json
    }.not_to change(BookingRequest, :count)
    expect(response).to redirect_to(booking_request_thanks_path)

    expect {
      post booking_requests_path, params: valid_params.merge(started_at: Time.current.to_i), as: :json
    }.not_to change(BookingRequest, :count)
  end
end
