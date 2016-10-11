import API from '../API'

const ToAPIActions = {
  search(topic) {
    console.log('in ToAPIActions');
    API.twitterSearch(topic)
  }
}

export default ToAPIActions;
