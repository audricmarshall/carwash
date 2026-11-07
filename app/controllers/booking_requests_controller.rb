class BookingRequestsController < ApplicationController
  include SpamProtection

  def new
    render inertia: "booking_requests/new", props: {
      packages: Package.for_site,
      preferred_periods: BookingRequest.preferred_period_options,
      selected_package: params[:formule],
      started_at: form_started_at
    }
  end

  def create
    return redirect_to booking_request_thanks_path if spam?

    booking_request = BookingRequest.new(booking_request_params)

    if booking_request.save
      BookingRequestMailer.with(booking_request:).confirmation.deliver_later
      BookingRequestMailer.with(booking_request:).notification.deliver_later if Brand.notification_email
      redirect_to booking_request_thanks_path
    else
      redirect_to new_booking_request_path, inertia: { errors: form_errors(booking_request) }
    end
  end

  def thanks
    render inertia: "booking_requests/thanks"
  end

  private

  def booking_request_params
    params.expect(booking_request: %i[
      package_id name email phone address postcode city vehicle preferred_date preferred_period message consent
    ])
  end
end
