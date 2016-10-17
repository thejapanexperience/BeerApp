// jshint esversion:6

import axios, { get, post, put } from 'axios';
import ServerActions from './actions/ServerActions';


const API ={

  getRandomBeer(){
    console.log('in API');
    axios.get(`/api/beer/`)
    .then(res => {
        console.log('in API callback');
        console.log('res: ', res)
        let data = res.data
        console.log('data: ', data)
        ServerActions.gotBeer(data.data)
      })
      .catch(console.error)
  },

//   twitterSearch(topic){
//     get(`/api/search/${topic}`)
//     .then( res => {
//       ServerActions.gotTweets(res.data)
//     })
//     .catch(console.error)
//   },
//
  save(beer){
    post('/api/saved',{beer})
    .then( res => {
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  },
//
  delete(id){
    axios.delete(`/api/saved/${id}`)
    .then( res => {
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  },
//
  getSaved(){
    get('/api/saved')
    .then( res => {
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  }
}

export default API
