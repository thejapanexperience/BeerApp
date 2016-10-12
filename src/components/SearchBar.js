import React, { Component } from 'react'
import ToAPIActions from '../actions/ToAPIActions'


export default class SearchBar extends Component {
  constructor() {
    super();
    this._submitForm = this._submitForm.bind(this);
  }
  _submitForm(e){
    e.preventDefault();
    let {input} = this.refs;
    let topic  = input.value;
    input.value ='';
    ToAPIActions.search(topic);
  }

  render() {
    return (
      <form className="form-inline" onSubmit = {this._submitForm}>
        <div className="form-group">
          <label className="sr-only" >Tweet Topic</label>
          <input ref ='input' type="text" className="form-control"  placeholder=""/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    )
  }
}
