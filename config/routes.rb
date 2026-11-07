Rails.application.routes.draw do
  root "pages#home"

  get "prestations", to: "pages#services", as: :services
  get "comment-ca-marche", to: "pages#how_it_works", as: :how_it_works
  get "zone", to: "pages#area", as: :area
  get "a-propos", to: "pages#about", as: :about
  get "mentions-legales", to: "pages#legal", as: :legal
  get "confidentialite", to: "pages#privacy", as: :privacy

  get "reserver", to: "booking_requests#new", as: :new_booking_request
  post "reserver", to: "booking_requests#create", as: :booking_requests
  get "reserver/merci", to: "booking_requests#thanks", as: :booking_request_thanks

  get "entreprises", to: "quote_requests#new", as: :new_quote_request
  post "entreprises", to: "quote_requests#create", as: :quote_requests
  get "entreprises/merci", to: "quote_requests#thanks", as: :quote_request_thanks

  get "up", to: "rails/health#show", as: :rails_health_check
end
