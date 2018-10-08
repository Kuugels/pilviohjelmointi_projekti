FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  // Toteuta kontrolleri tähän
  $scope.newTopic = {};

  Api.getTopics().success(function(topics){ // topics = response
    $scope.topics = topics;
  });
  
  Api.getTopic().success(function(topic) {
    console.log('topic found');
  });

  $scope.addTopic = function() {
    Api.data = {
      name: $scope.newTopic.name,
      description: $scope.newTopic.description
    }
    Api.addTopic().success(function(res) {
      $location.path('/topics/' + res.id);
    })
  }
  $scope.playAudio = function() {
    console.log("plob")
    var audio = new Audio('../css/blop.mp3');
    audio.play();
  };
});
