class ApplicationMailer < ActionMailer::Base
  default from: 'info@repmexico.com', to: 'info@repmexico.com', subject: 'Contacto REP'
  layout 'mailer'
end
