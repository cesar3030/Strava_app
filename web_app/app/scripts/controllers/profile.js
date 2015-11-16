'use strict';

/**
 * @ngdoc function
 * @name webAppApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the webAppApp
 */
angular.module('webAppApp')
  .controller('ProfileCtrl', function ($scope, $http) {

    $scope.user=null;
    $scope.members=null;
    $scope.selectedMember=null;
    $scope.selectedClub=null;


    $http.get('http://127.0.0.1:3000/user').then(function(resp) {
      $scope.user = resp.data;
      console.log(resp);
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    })

    //Function that load the club selected
    $scope.showMembers=function(clubId){
      getMembers(clubId);
      getClubInfo(clubId);
      $scope.selectedMember=null;
    };

    var getMembers = function(clubId){
      $http.get('http://127.0.0.1:3000/club/'+clubId+'/members').then(function(resp) {
        $scope.members = resp.data;
        console.log(resp);
      }, function(err) {
        console.error('ERR', err);
      })
    };

    var getClubInfo = function(clubId){
      $http.get('http://127.0.0.1:3000/club/'+clubId).then(function(resp) {
        $scope.selectedClub = resp.data;
        console.log(resp);
      }, function(err) {
        console.error('ERR', err);
      })
    };

    //Function that load the user's profile information
    $scope.showProfile=function(userId){
      $http.get('http://127.0.0.1:3000/user/'+userId).then(function(resp) {
        $scope.selectedMember = resp.data;
        console.log(resp);
      }, function(err) {
        console.error('ERR', err);
      })
    }

  });
