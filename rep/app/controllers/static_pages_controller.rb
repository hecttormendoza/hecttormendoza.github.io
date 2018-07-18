class StaticPagesController < ApplicationController

  def home
  	@propiedades = ['Tennyson', 'Galileo', 'Dr. Vertíz', 'Casa Palmas', 'Córdoba', 'Cholula', 'Zamora', 'Veracruz', 'Icazbalceta', 'Londres','Niagara', 'Emilio Dondé','Márquez Sterling', 'Bucareli', 'Manuel Dublán', 'Emilio Castelar', 'Platón', 'Rubén Darío', 'Sócrates', 'Secretaría de Marina', 'Casa Sauces', 'Vidalta', 'Frondoso(Lomas Country club)', 'Morelos', 'Martires de la Conquista', 'Minería'].sort
  end

  def contact
    ContactMailer.contact(params[:propiedad],params[:name], params[:email], params[:comments]).deliver_now
    redirect_to root_path
  end

  def temporal
  	render 'temporal',  :layout => false
  end

end
