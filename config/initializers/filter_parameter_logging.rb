Rails.application.config.filter_parameters += [
  :passw, :email, :phone, :address, :secret, :token, :_key, :crypt, :salt, :certificate, :otp, :ssn, :cvv, :cvc
]
