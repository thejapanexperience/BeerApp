import AppDispatcher from '../AppDispatcher'

const ServerActions ={
  gotTweets(tweets){
    //  console.log("server data",data);
    AppDispatcher.dispatch({
      type:'GOT_TWEETS',
      payload:{tweets}
    })
  }
}
export default ServerActions;
