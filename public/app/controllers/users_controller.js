FoorumApp.controller('UsersController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  $scope.playAudio = function() {
    console.log("plob")
    var audio = new Audio('../css/blop.mp3');
    audio.play();
  };
});
