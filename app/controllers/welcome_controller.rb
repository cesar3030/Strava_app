

class WelcomeController < ApplicationController


  def index
    @data = $client.retrieve_current_athlete
    render :json => @data
  end
end
