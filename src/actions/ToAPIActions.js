import API from '../API'

const ToAPIActions = {
  search(topic) {
    console.log('in ToAPIActions');
    API.twitterSearch(topic)
  },
  save(tweet) {
    API.save(tweet)
  }
}

export default ToAPIActions;
