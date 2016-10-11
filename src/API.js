import axios, { get, post, put} from 'axios';
import ServerActions from './actions/ServerActions';


const API ={
  twitterSearch(topic){
    console.log('in API before get');
    console.log('topic: ', topic)
    get(`/search/${topic}`)
    .then((res) => {
      console.log('in API after get');
      console.log('res.data: ', res)
      ServerActions.gotTweets(res.data);
    })
    .catch(console.error)

    // .catch((err) => {
    //   console.log("Error!", err);
    // })
  }
}

export default API
