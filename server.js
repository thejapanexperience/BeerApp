const PORT = 8000
const Twitter = require('twitter')
const path = require('path')
const morgan = require('morgan')
const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const webpackConfig = require('./webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const Tweet = require('./models/twitter')

const app = express()
const compiler = webpack(webpackConfig)

app.use(morgan('dev'))
app.use(express.static('build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath, noInfo: true
}))

app.use(webpackHotMiddleware(compiler))

const client = new Twitter({
  consumer_key: 'MxIk4vCciG1vx8Jjt5WilKB0G',
  consumer_secret: 'GDs0Wookr0AQVkf8yrU1ygyfSuoJDKCOUYzYlkMoQkOY6zXWNn',
  access_token_key: '755419386945544195-EdeVW436hFmAxBvQOd5ykASOg7SI9RE',
  access_token_secret: 'Or2eBH807aMA8g0GyRREttOzfuSiElkKZemeM1oz1N25Q'
});


app.get('/search/:topic',(req,res) => {
  let {topic} = req.params;
  console.log('in server app.get');
  client.get('search/tweets', {q: `${topic}`}, function(error, tweets, response) {
    //  console.log("response",response);
     if (error) return res.status(400).send(error);
     res.send(tweets.statuses);
  });
})

app.post('/saved',(req,res) => {
  console.log('in server in app.post')
  Tweet.saveTweet(req.body)
  .then((data) => {res.send(data)})
  .catch((err) => {res.status(400).send(err)})
  })

app.delete(`/saved/:id`,(req,res) => {
let {id} = req.params;
  Tweet.deleted(id)
  .then((data) => {res.send(data)})
  .catch((err) => {res.status(400).send(err)})
  })

  app.get('/saved',(req,res) => {
     Tweet.getSaved()
     .then((data) => {res.send(data)})
     .catch((err) => {res.status(400).send(err)})
  })
  
// app.get('/business',(req,res) =>{
//   let { type,location } = req.query;
//   console.log(type,location);
//   YelpSearch.getData(type,location, (err, data) => {
//     if (err) return res.status(400).send(err);
//     res.send(data);
//   })
// })

//
// app.get('/flashcard',(req,res) => {
//   let { category } = req.query;
//   if (category){
//     Flashcards.getCard(category, (err, flashcard) => {
//       if (err) return res.status(400).send(err);
//       res.send(flashcard);
//     });
//   } else {
//     Flashcards.getAll((err,flashcard) => {
//       if (err) return res.status(400).send(err);
//       res.send(flashcard);
//     });
//   }
// });
//
// app.get('/flashcard/:answer',(req,res) => {
//   Flashcards.getAnswer(req.params.answer, (err,check) => {
//     if(err) return res.status(400).send(err);
//     res.send(check);
//   });
// });
//
// app.post('/flashcard' ,(req,res) => {
//   Flashcards.create(req.body, err => {
//     if(err) return res.status(400).send(err);
//     res.send(req.body);
//   });
// })
//
// app.delete('/flashcard/:id',(req,res) => {
//   Flashcards.del(req.params.id, err => {
//     if(err) return res.status(400).send(err);
//     res.send(req.params.id+" deleted");
//   })
// })
//
// app.put('/flashcard/:id',(req,res) => {
//   Flashcards.update(req.body,req.params.id, err => {
//     if(err) return res.status(400).send(err);
//     res.send(req.params.id+" updated");
//   })
// })

app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(PORT, err => {
  console.log(err || `Express listening on port ${PORT}`);
})
