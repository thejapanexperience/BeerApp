import API from '../API'

const ToAPIActions = {
  search(topic) {
    API.twitterSearch(topic)
  },
  save(tweet) {
    API.save(tweet)
  },
  deleteTweet(id) {
    API.deleteTweet(id)
  },
  getSaved(){
    API.getSaved()
  }

}

export default ToAPIActions;
