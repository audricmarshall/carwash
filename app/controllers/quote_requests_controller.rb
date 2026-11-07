class QuoteRequestsController < ApplicationController
  include SpamProtection

  def new
    render inertia: "quote_requests/new", props: { started_at: form_started_at }
  end

  def create
    return redirect_to quote_request_thanks_path if spam?

    quote_request = QuoteRequest.new(quote_request_params)

    if quote_request.save
      QuoteRequestMailer.with(quote_request:).confirmation.deliver_later
      QuoteRequestMailer.with(quote_request:).notification.deliver_later if Brand.notification_email
      redirect_to quote_request_thanks_path
    else
      redirect_to new_quote_request_path, inertia: { errors: form_errors(quote_request) }
    end
  end

  def thanks
    render inertia: "quote_requests/thanks"
  end

  private

  def quote_request_params
    params.expect(quote_request: %i[company name email phone city fleet_size message consent])
  end
end
