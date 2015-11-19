require 'test_helper'

class ClubControllerTest < ActionController::TestCase
  test "should get club_info" do
    get :club_info
    assert_response :success
  end

end
