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
    console.log('in save in API before post');
    console.log('tweet: ', tweet)
    post('/saved',{tweet})
    .then( res => {
      console.log('in API after post');
      console.log('res.data: ', res.data)
      ServerActions.gotSaved(res.data)
    })
    .catch(console.error)
  }
}

export default API
