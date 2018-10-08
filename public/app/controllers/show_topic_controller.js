FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  // Toteuta kontrolleri tähän
  Api.id = $routeParams.id;
  Api.messageId = $routeParams.id
  $scope.newMessage = {};
  Api.getTopic().success(function(res) {
    $scope.name = res.name;
    $scope.messages = res.Messages;
    $scope.totalMessages = res.Messages.length;
    $scope.description = res.description;
  });

  $scope.addMessage = function() {
    Api.message = {
      title: $scope.newMessage.title,
      content: $scope.newMessage.content
    };
    Api.addMessage().success(function(res) {
      $location.path('/messages/' + res.id);
    })
  };

  $scope.playAudio = function() {
    console.log("plob")
    var audio = new Audio('../css/blop.mp3');
    audio.play();
  };
});
