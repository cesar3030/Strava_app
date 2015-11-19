class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  $client = Strava::Api::V3::Client.new(:access_token => "b79127a337db65fd08c2d77749380fc589fe33be")
end
