class QuoteRequestMailer < ApplicationMailer
  before_action { @quote_request = params[:quote_request] }

  def confirmation
    mail to: @quote_request.email, subject: t("mailers.quote_request.confirmation_subject")
  end

  def notification
    mail to: Brand.notification_email, reply_to: @quote_request.email,
         subject: t("mailers.quote_request.notification_subject")
  end
end
