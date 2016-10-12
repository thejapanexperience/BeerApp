import AppDispatcher from '../AppDispatcher'

const ServerActions ={
  gotTweets(tweets){
    AppDispatcher.dispatch({
      type:'GOT_TWEETS',
      payload:{tweets}
    })
  },
  
  gotSaved(saved){
    AppDispatcher.dispatch({
      type:'GOT_SAVED',
      payload:{saved}
    })
  }
}
export default ServerActions;
