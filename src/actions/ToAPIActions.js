import API from '../API'

const ToAPIActions = {
  search(topic) {
    console.log('in ToAPIActions');
    API.twitterSearch(topic)
  },
  save(tweet) {
    console.log('in ToAPIActions')
    API.save(tweet)
  }
}

export default ToAPIActions;
