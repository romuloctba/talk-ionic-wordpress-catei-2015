// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller("AppCtrl", function($scope, $http){
  var apiURL = "http://localhost/catei-wp/wp-json";
  $http.get(apiURL+'/posts?type=palestras')
    .then(function(data){
        $scope.palestras = data.data;
    });

  $scope.scanQrCode = function(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        alert("Leitura: " + result.text);
      }, 
      function (error) {
          alert("Erro ao Scanear: " + error);
      }
   );
  };
});
