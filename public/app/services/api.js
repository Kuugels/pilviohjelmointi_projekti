FoorumApp.service('Api', function($http){
  // Aihealueiden Api-funktiot
  this.getTopics = function(){
    // Hae kaikki aihealueet toteuttamasi Api:n polusta /topics
    return $http.get('/topics');
  }

  this.id = null;

  this.getTopic = function(){
    // Hae annetulla id:llä varastettu aihealue toteuttamasi Api:n polusta /topics/:id
    return $http.get('/topics/' + this.id);
  }

  this.data = {};

  this.addTopic = function(){
    // Lisää annettu aihealue lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics
    return $http.post('/topics', this.data).success(function(data, status, headers, config){
      console.log('Palvelin lähetti vastauksen!', data);
      })
      .error(function(data, status, headers, config){
        console.log('Jotain meni pieleen...');
      });
  }

  // Viestien Api-funktiot
  this.messageId = null;
  this.getMessage = function(){
    // Hae annetulla id:llä varustettu viesti toteuttamasi Api:n polusta /messages/:id
    return $http.get('/messages/' + this.messageId);
  }
  this.message = {};
  this.addMessage = function(message, topicId){
    // Lisää annettu viesti lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /topics/:topicId/message
    return $http.post('/topics/' + this.id + '/message', this.message)
      .success(function(data, status, headers, config){
      console.log('Palvelin lähetti vastauksen!', data);
      })
      .error(function(data, status, headers, config){
        console.log('Jotain meni pieleen...');
      });
  }

  // Vastausten Api-funktiot
  this.reply = {};
  this.addReply = function(reply, messageId){
    // Lisää annettu vastaus lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /messages/:messageId/reply
    return $http.post('/messages/' + this.messageId + '/reply', this.reply)
    .success(function(data, status, headers, config){
      console.log('Palvelin lähetti vastauksen!', data);
      })
      .error(function(data, status, headers, config){
        console.log('Jotain meni pieleen...');
      });
  }

  // Käyttäjän Api-funktiot
  this.login = function(user){
    // Tarkista käyttäjän kirjautuminen lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users/authenticate
  }
  this.register = function(user){
    // Lisää annettu käyttäjä lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users
  }
  this.getUserLoggedIn = function(){
    // Hae kirjautunut käyttäjä toteuttamasi Api:n polusta /users/logged-in
  }
  this.logout = function(){
    return $http.get('/users/logout');
  }
});
