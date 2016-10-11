import API from '../API'
import AppDispatcher from '../AppDispatcher'

const TwitterActions = {
  search(type,location){
    API.search(type,location)
  }
}

export default TwitterActions
