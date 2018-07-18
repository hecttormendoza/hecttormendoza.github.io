class ContactMailer < ApplicationMailer

  def contact(propiedad,name, email, comments)
  	@propiedad = propiedad
    @name = name
    @email = email
    @comments = comments
    mail
  end

end
