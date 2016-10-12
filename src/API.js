import axios, { get, post, put} from 'axios';
import ServerActions from './actions/ServerActions';


const API ={
  twitterSearch(topic){
    get(`/search/${topic}`)
    .then( res => {
      ServerActions.gotTweets(res.data)
    })
    .catch(console.error)
  },

  save(tweet){
    post('/saved',{tweet})
    .then( res => {
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  }
}

export default API
