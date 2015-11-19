class UserController < ApplicationController
  def index
    @data = $client.retrieve_current_athlete
    render :json => @data
  end

  def user_info
    @data = $client.retrieve_another_athlete(params[:id])
    render :json => @data
  end
end
