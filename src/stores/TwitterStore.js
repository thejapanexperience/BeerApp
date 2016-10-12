import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Storage from '../Storage'

let _tweets = [];
let _saved = [];

class TwitterStore extends EventEmitter {
  constructor(){
    super();
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'GOT_TWEETS':
        _tweets = action.payload.tweets;
        this.emit('CHANGE');
        break;

        case 'GOT_SAVED':
        _saved = action.payload.saved;
        this.emit('CHANGE');
        break;
      }
    })
  }

  startListening(cb){
    this.on('CHANGE',cb);
  }

  stopListening(cb){
    this.removeListener('CHANGE',cb)
  }

  getTweets(){
    return _tweets;
  }

  getSaved(){
    return _saved;
  }

}

export default new TwitterStore();
