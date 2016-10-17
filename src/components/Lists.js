// jshint esversion:6

import React, { Component } from 'react';
import ToAPIActions from '../actions/ToAPIActions'
import { Card, Icon, Image ,Grid ,Button , Label ,Rating ,List, Container} from 'semantic-ui-react'
const { Column, Row } = Grid


export default class Lists extends Component {
  constructor(){
    super();
    this._save= this._save.bind(this);
  }

 _save(beer){
   let { comment, rating } = this.refs
   console.log('comment.value: ', comment.value)
   console.log('rating.value: ', rating)
   beer.comment=comment.value
  ToAPIActions.save(beer);
 }

  render(){
    const {beer} = this.props;


    if(!beer){
      return (
        <div className="container">
          <h1>Beer</h1>
        </div>
        )
      } else {
        console.log('beer: ', beer)
        let name = beer.nameDisplay
        let description = beer.description
        return(
          <Container>
            <List relaxed = 'very' animated verticalAlign='middle'>

              <List.Item>
                <div onClick={() => this._save(beer)} className="ui yellow ribbon label save">
                  <i className="save icon"></i>Save
                </div>
                <Image className="ui small image" src="http://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Drinks-PNG-/Mug-with-Beer-PNG-Vector-Clipart-Image.png?m=1434439920">
                </Image>

                <List.Header as='a'>{name}</List.Header>
                <List.Content>
                  <List.Description>
                    {description}
                  </List.Description>
                  <br/>
                  <List.Header>
                    Add Comment
                  </List.Header>
                  <List.Description>
                    <input type="text" ref="comment"/>
                  </List.Description>
                  <List.Description>
                    <Rating icon='star' defaultRating={3} maxRating={4} ref="star"/>
                  </List.Description>
                </List.Content>
              </List.Item>

            </List>
          </Container>
        )
    }
  }
}
