const express = require('express')
const router = express.Router()
const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: 'MxIk4vCciG1vx8Jjt5WilKB0G',
  consumer_secret: 'GDs0Wookr0AQVkf8yrU1ygyfSuoJDKCOUYzYlkMoQkOY6zXWNn',
  access_token_key: '755419386945544195-EdeVW436hFmAxBvQOd5ykASOg7SI9RE',
  access_token_secret: 'Or2eBH807aMA8g0GyRREttOzfuSiElkKZemeM1oz1N25Q'
});

router.get('/:topic',(req,res) => {
  let {topic} = req.params;
  console.log('topic: ', topic);
  client.get('search/tweets', {q: `${topic}`}, function(error, tweets, response) {
     console.log("response",tweets);
     if (error) return res.status(400).send(error);
     res.send(tweets.statuses);
  });
})

module.exports = router
