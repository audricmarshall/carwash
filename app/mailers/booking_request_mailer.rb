class BookingRequestMailer < ApplicationMailer
  before_action { @booking_request = params[:booking_request] }

  def confirmation
    mail to: @booking_request.email, subject: t("mailers.booking_request.confirmation_subject")
  end

  def notification
    mail to: Brand.notification_email, reply_to: @booking_request.email,
         subject: t("mailers.booking_request.notification_subject")
  end
end
