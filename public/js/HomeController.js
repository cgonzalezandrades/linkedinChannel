myApp.controller('HomeController', ['$scope',  '$rootScope', '$state', '$stateParams', '$http',
    function ($rootScope, $scope, $state, $stateParams, $http) {

      console.log('ins home controller')
      $scope.newUser={};
      
      $http.get('/accountList').then(function success(response) {
        console.log(response.data)
                console.log("I got the data I requested");
                // console.log(response);
          $scope.users = response.data;
//        $scope.users = {something:'ss', another:'sds'}
      });
      
//  $scope.users = {something:'ss', another:'sds'}
      
      $scope.addNewUser = function(){
        
        console.log($scope.newUser)
        
         $scope.users.push({
           ACCOUNT_FIRST_NAME:$scope.newUser.first_name,
           ACCOUNT_LAST_NAME:$scope.newUser.last_name,
           ACCOUNT_LINK:$scope.newUser.link
         })
      }

}]);