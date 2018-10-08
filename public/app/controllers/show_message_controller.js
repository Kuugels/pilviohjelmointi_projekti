FoorumApp.controller('ShowMessageController', function($scope, $routeParams, $route, Api){
  // Toteuta kontrolleri tähän
  Api.messageId = $routeParams.id;
  Api.getMessage().success(res => {
    $scope.title = res.title;
    $scope.content = res.content;
    $scope.repliesL = res.Replies.length;
    $scope.replies = res.Replies;
  });

  $scope.addReply = () => {
    Api.reply = {
      content: $scope.newReply.content
    };
    Api.addReply().success(res => {
      $route.reload();
    })
  }

  $scope.playAudio = function() {
    console.log("plob")
    var audio = new Audio('../css/blop.mp3');
    audio.play();
  };
});
