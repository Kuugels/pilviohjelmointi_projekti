var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');

// Huom! Kaikki polut alkavat polulla /messages

// GET /messages/:id
router.get('/:id', function(req, res, next) {
  // Hae viesti tällä id:llä ja siihen liittyvät vastaukset tässä (Vinkki: findOne ja sopiva include)
  var messageId = req.params.id;
  Models.Message.findOne(
    {where: {id: messageId},
    include: {
      model: Models.Reply
    }
  })
  .then((message) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(message);
  })
  .catch((error) => {
    console.log('Error getting message with specific id')
  })
});

// POST /messages/:id/reply
router.post('/:id/reply', function(req, res, next){
  // Lisää tällä id:llä varustettuun viestiin...
  var messageId = req.params.id;
  // ...tämä vastaus (Vinkki: lisää ensin replyToAdd-objektiin kenttä MessageId, jonka arvo on messageId-muuttujan arvo ja käytä sen jälkeen create-funktiota)
  var replyToAdd = req.body;
  // Palauta vastauksena lisätty vastaus
  console.log(replyToAdd)
  Models.Reply.create({
    content: replyToAdd.content,
    MessageId: messageId
  })
  .then((reply) => {
    res.send(reply);
  })
});

module.exports = router;
