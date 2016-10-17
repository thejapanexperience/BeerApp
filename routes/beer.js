const express = require('express')
const router = express.Router()
const axios = require('axios')


// router.get('/',(req,res) => {
//   console.log('in server beer.js');
//   axios.get('http://api.brewerydb.com/v2/?key=bfc431dd0aa783a15330b90b936be2f1');
//   .then(res => {
//     console.log('in API callback');
//     let data = res.data
//     console.log('data: ', data)
//     res.send(data)
//     // ServerActions.receiveSearch(data)
//   })
//   .catch(console.error)
// })

router.get('/', function(req, res) {

  axios.get('http://api.brewerydb.com/v2/beer/random?key=bfc431dd0aa783a15330b90b936be2f1')
    .then(response => {
      console.log('in API callback');
      let data = response.data
      console.log('data: ', data)
      res.send(data)
    })
    .catch(err => {
      console.log('err:', err)
      res.status(400).send(err)
    })
});


// post(`http://localhost:8000/search/`, {
//       term: whats,
//       location: wheres
//     })
//       .then(res => {
//         console.log('in API callback');
//         let data = res.data
//         console.log('data: ', data)
//         ServerActions.receiveSearch(data)
//       })
//       .catch(console.error)
//   },

// router.delete(`/:id`,(req,res) => {
//   let { id } = req.params;
//   Micro.deleted(id)
//   .then((data) => {res.send(data)})
//   .catch((err) => {res.status(400).send(err)})
// }),

// audioAnalyse(string) {
//     post(`api/saved/audio-analyze/`, {
//       string
//     })
//     .then( res => {
//       console.log('res in API ', res);
//     })
//     .catch(err => {throw new Error("Audio Analyze FAILED: ", err)});
//   },
//
module.exports = router
