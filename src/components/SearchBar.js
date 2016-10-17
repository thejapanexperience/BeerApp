// jshint esversion:6

import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'


export default class SearchBar extends Component {
  constructor() {
    super();

    this._getRandomBeer = this._getRandomBeer.bind(this)
    // this.addName = this.addName.bind(this);

  }
  _getRandomBeer(){
    ToAPIActions.getRandomBeer();
  }

  render() {
    return (
      <div>
        <div>
          {/* <button className="sr-only" >Get Random Beer</button> */}
          {/* <input ref ='input' type="text" className="form-control"  placeholder=""/> */}
        </div>
        <button onClick={this._getRandomBeer} className="btn btn-default">Get Random Beer</button>
      </div>
    )
  }
}
