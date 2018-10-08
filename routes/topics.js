var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /topics

// GET /topics
router.get('/', function(req, res, next) {
    // Hae kaikki aihealueet tässä (Vinkki: findAll)
    Models.Topic.findAll()
    .then((topics) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(topics);
    })
    .catch((error) => {
      console.log('Error getting topics')
    });
});

// GET /topics/:id
router.get('/:id', function(req, res, next) {
  // Hae aihealue tällä id:llä tässä (Vinkki: findOne)
  var topicId = req.params.id;
  Models.Topic.findOne(
    {
      where: {id: topicId},
      include: {
        model: Models.Message
      }
    })
  .then((topic) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(topic);
  })
  .catch((error) => {
    console.log('Error getting topic with specific id')
  })
  
});

// POST /topics
router.post('/', function(req, res, next) {
  // Lisää tämä aihealue
  var topicToAdd = req.body;
  console.log("asdasda",topicToAdd)
  Models.Topic.create({
    name: topicToAdd.name,
    description: topicToAdd.description
  })
  .then((topic) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(topic);
  })
  .catch((error) => {
    console.log('Error posting new topic')
  })
  // Palauta vastauksena lisätty aihealue
});

// POST /topics/:id/message
router.post('/:id/message', function(req, res, next) {
  // Lisää tällä id:llä varustettuun aihealueeseen...
  var topicId = req.params.id;
  // ...tämä viesti (Vinkki: lisää ensin messageToAdd-objektiin kenttä TopicId, jonka arvo on topicId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
  var messageToAdd = req.body;
  Models.Message.create({
    title: messageToAdd.title,
    content: messageToAdd.content,
    TopicId: topicId
  }).then(message => {
    // Palauta vastauksena lisätty viesti
    res.send(message);
  })
});

module.exports = router;
