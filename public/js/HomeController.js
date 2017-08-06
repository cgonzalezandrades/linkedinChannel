myApp.controller('HomeController', ['$scope',  '$rootScope', '$state', '$stateParams', '$http',
    function ($rootScope, $scope, $state, $stateParams, $http) {

      console.log('ins home controller')
      $scope.newUser={};
      $scope.userIn = true;
      
      $http.get('/accountList').then(function success(response) {
        console.log(response.data)
                console.log("I got the data I requested");
                // console.log(response);
          $scope.users = response.data;
//        $scope.users = {something:'ss', another:'sds'}
      });
      
//  $scope.users = {something:'ss', another:'sds'}
      
      $scope.formFilled = function(){
        
        console.log($scope.newUser)
        
        if($scope.newUser.firstName.length > 0 && $scope.newUser.lastName.length > 0 && $scope.newUser.link.length > 0){
            $scope.userIn = false;
        console.log('sd')
        }else{
          $scope.userIn = true;
        }
        
      
      }
      
      $scope.addNewUser = function(){
        
        console.log($scope.newUser)
        
         $scope.users.push({
           ACCOUNT_FIRST_NAME:$scope.newUser.firstName,
           ACCOUNT_LAST_NAME:$scope.newUser.lastName,
           ACCOUNT_LINK:$scope.newUser.link
         })
      }

}]);