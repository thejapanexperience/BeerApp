import API from '../API'

const ToAPIActions = {
  search(topic) {
    console.log('in ToAPIActions');
    API.twitterSearch(topic)
  },
  save(tweet) {
    console.log('in ToAPIActions')
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
