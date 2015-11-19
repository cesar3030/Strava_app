class ClubController < ApplicationController

  def info
    @club_info = $client.retrieve_a_club(params[:id])
    render :json => @club_info
  end

  def club_members
    @club_members=$client.list_club_members(params[:id])
    render :json => @club_members
  end
end
