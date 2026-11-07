class ApplicationMailer < ActionMailer::Base
  default from: -> { "#{Brand.name} <#{ENV.fetch("MAIL_FROM", "contact@localhost")}>" }
  layout "mailer"

  private

  def brand
    @brand ||= Brand.config
  end
  helper_method :brand
end
