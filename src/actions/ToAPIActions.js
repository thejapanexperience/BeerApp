// jshint esversion:6

import API from '../API';

const ToAPIActions = {

  getRandomBeer: API.getRandomBeer,
  save: API.save,
  getSaved: API.getSaved,
  delete: API.delete,
};

export default ToAPIActions;
