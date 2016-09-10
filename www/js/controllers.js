angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $cordovaVibration, $cordovaFlashlight, $cordovaNativeAudio) {
  $scope.settings = {
    enableFriends: true
  };

  //Funciones del plugin Vibrar
  $scope.Vibrar = function(){
    try{
      $cordovaVibration.vibrate(10000); //Vibrar 10s
    }
    catch (err){
      console.log("Funciona la vibración en el celular, pero no se puede en la PC");
    }
  }

  $scope.DetenerVibrar = function(){
    try{
      $cordovaVibration.vibrate(0);
    }
    catch (err){
      console.log("Funciona detener la vibración en el celular, pero no se puede en la PC");
    }
  }

  //Funciones del plugin Linterna
  $scope.Linterna = function(){
    $cordovaFlashlight.switchOn();
  }

  $scope.DetenerLinterna = function(){
    $cordovaFlashlight.switchOff()
  }

if( window.plugins && window.plugins.NativeAudio ){
  //Funciones del plugin Sonidos
  $cordovaNativeAudio
    .preloadSimple('click', 'audio/1.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

  $scope.Sonido = function(){
    $cordovaNativeAudio.play('click');
    //$cordovaNativeAudio.loop('music');
  }

}
});
