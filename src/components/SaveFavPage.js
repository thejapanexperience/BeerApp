import React, { Component } from 'react'
import BeerStore from '../stores/BeerStore'
import Lists from './Lists'
import SearchBar from './SearchBar'
import ToAPIActions from '../actions/ToAPIActions'
import { Button, Card, Image ,Grid } from 'semantic-ui-react'
const { Column, Row } = Grid


export default class SaveFavPage extends Component {
  constructor () {
    super();

    this.state = {
      saved: BeerStore.getSaved(),
    }
    this._onChange = this._onChange.bind(this);
    this._getAllSaved = this._getAllSaved.bind(this);
    this._delete = this._delete.bind(this);
  }
  componentWillMount() {
    BeerStore.startListening(this._onChange)
    this._getAllSaved()
  }

  componentWillUnmount(){
    BeerStore.stopListening(this._onChange)
  }

  _onChange(){
    this.setState({
      saved: BeerStore.getSaved()
    })
  }

  _delete(id){
    ToAPIActions.delete(id)
  }

  _getAllSaved(){
    ToAPIActions.getSaved()
    this.setState ({
     bool: true
   })
  }

  render(){

  let {saved} = this.state

  if(!saved){
      console.log('no saved')
      return(
        <div className="container">
          <h1>no beer</h1>
        </div>
      )

 } else {
   console.log('saved: ', saved)
     return (
       <Card.Group>
         {saved.map( save => {
           let name = save.beer.nameDisplay
           let description = save.beer.description
           let comment = save.beer.comment
           return (
             <Card key ={save.beer.id}>
               <Card.Content>
                 <Card.Header>
                   {name}
                 </Card.Header>
                 <Card.Header>
                   My Comment: {comment}
                 </Card.Header>
                 <Card.Description>
                   {description}
                 </Card.Description>
               </Card.Content>
               <Card.Content extra>
                 <div className='ui two buttons'>
                   <Button basic color='green'>Saved</Button>
                   <div onClick = {this._delete.bind(null,save.beer.id)}><Button basic color='red'>Unsave</Button></div>
                     </div>
                   </Card.Content>
                 </Card>
           )
         })}
       </Card.Group>
     )
 }
}
}
