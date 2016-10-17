// jshint esversion:6

import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import Storage from '../Storage'

let _beer;
let _saved;

class BeerStore extends EventEmitter {
  constructor(){
    super();
    AppDispatcher.register(action => {
      switch(action.type) {
        case 'GOT_BEER':
        _beer = action.payload.beer;
        this.emit('CHANGE');
        break;

        case 'GOT_SAVED':
        _saved = action.payload.saved;
        console.log('_saved: ', _saved)
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

  getBeer(){
    return _beer;
  }

  getSaved(){
    return _saved;
  }

}

export default new BeerStore();
