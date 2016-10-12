import axios, { get, post, put } from 'axios';
import ServerActions from './actions/ServerActions';


const API ={
  twitterSearch(topic){
    get(`/api/search/${topic}`)
    .then( res => {
      ServerActions.gotTweets(res.data)
    })
    .catch(console.error)
  },

  save(tweet){
    post('/api/saved',{tweet})
    .then( res => {
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  },

  deleteTweet(id){
    axios.delete(`/api/saved/${id}`)
    .then( res => {
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  },

  getSaved(){
    get('/api/saved')
    .then( res => {
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  }
}

export default API
