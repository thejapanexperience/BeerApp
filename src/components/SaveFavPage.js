import React, { Component } from 'react'
import TwitterStore from '../stores/TwitterStore'
import Lists from './Lists'
import SearchBar from './SearchBar'
import { Button, Card, Image } from 'semantic-ui-react'

export default class SaveFavPage extends Component {
  constructor () {
    super();

    this.state = {
      saved: TwitterStore.getSaved()
    }
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount() {
    TwitterStore.startListening(this._onChange)
  }

  componentWillUnmount(){
    TwitterStore.stopListening(this._onChange)
  }

  _onChange(){
    this.setState({
      saved: TwitterStore.getSaved()
    })
  }

  render(){
    const {saved} = this.state;
    console.log('saved: ', saved)
    
    return (

      <Card.Group>

        {saved.length>0 ?
          saved.map((save) => {
            let {created_at, id, text} = save.tweet;
            let image = save.tweet.user.profile_image_url
            let name = save.tweet.user.name
            return
            (
              <Card key={id}>
                <Card.Content>
                  <Image floated='right' size='mini' src={image} />
                  <Card.Header>
                    {name}
                  </Card.Header>
                  <Card.Meta>
                    {created_at}
                  </Card.Meta>
                  <Card.Description>
                    {text}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Saved</Button>
                    <Button basic color='red'>Unsave</Button>
                  </div>
                </Card.Content>
              </Card>

          )})

          : <div><h1>HI!!!!!</h1></div>}
      </Card.Group>
    )
  }
}
