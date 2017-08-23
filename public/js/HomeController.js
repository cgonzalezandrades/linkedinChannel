myApp.controller('HomeController', ['$scope', '$rootScope', '$state', '$stateParams', '$http',
    function ($rootScope, $scope, $state, $stateParams, $http) {

//    console.log('ins home controller')
    $scope.newUser = {};
    $scope.userIn = true;


    $scope.getAccounts = function () {
      $http.get('/accountList').then(function success(response) {
        console.log(response.data)
        $scope.users = response.data;

        for (var i = 0; i < $scope.users.length; i++) {

          var dateSplit = response.data[i].DATE_CREATED.split(/[- :]/);
          var dayStrip = dateSplit[2].split('T');
          var date = dateSplit[0] + '/' + dateSplit[1] + '/' + dayStrip[0];

          $scope.users[i].DATE_CREATED = date;
          $scope.users[i].ADDED = false;

        }

      });
    }
    $scope.getAccounts();
    //  $scope.users = {something:'ss', another:'sds'}

    $scope.userConnected = function (index) {
      $scope.users[index].ADDED = true;
    }

    $scope.formFilled = function () {

      if ($scope.newUser.ACCOUNT_FIRST_NAME.length > 0 && $scope.newUser.ACCOUNT_LAST_NAME.length > 0 && $scope.newUser.ACCOUNT_LINK.length > 0) {
        $scope.userIn = false;
      } else {
        $scope.userIn = true;
      }


    }

    $scope.addNewUser = function () {





      $http.post('/addAccount', $scope.newUser).then(function success(response) {

      }, function errorCallback(error) {
        console.log(error)
      });


      $scope.getAccounts();
      $scope.newUser = {};

    }

}]);