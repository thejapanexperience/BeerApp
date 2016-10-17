// jshint esversion:6

import AppDispatcher from '../AppDispatcher';

const ServerActions ={
  gotBeer(beer){
    console.log('in ServerActions');
    console.log('beer: ', beer)
    AppDispatcher.dispatch({
      type:'GOT_BEER',
      payload:{beer}
    });
  },

  gotSaved(saved){
    AppDispatcher.dispatch({
      type:'GOT_SAVED',
      payload:{saved}
    })
  }
}
export default ServerActions;
