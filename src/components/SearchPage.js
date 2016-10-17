// jshint esversion:6

import React, { Component } from 'react'
import BeerStore from '../stores/BeerStore'
import Lists from './Lists'
import SearchBar from './SearchBar'
import { Grid } from 'semantic-ui-react'
const { Column, Row } = Grid

export default class SearchPage extends Component {
  constructor () {
    super();

    this.state = {
      beer: BeerStore.getBeer()
    }
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    BeerStore.startListening(this._onChange)
  }

  componentWillUnmount(){
    BeerStore.stopListening(this._onChange)
  }

  _onChange(){
    this.setState({
      beer: BeerStore.getBeer()
    })
  }

  render(){
    const {beer} = this.state;
    return (
      <Grid>
        <Row color='orange' textAlign='center'>
          <Column><SearchBar/></Column>
        </Row>
        <Row>
          <Column><Lists beer ={beer}/></Column>
        </Row>
      </Grid>
    )
  }
}
