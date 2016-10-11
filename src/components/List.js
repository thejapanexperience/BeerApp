import React, { Component } from 'react';
// import TwitterActions from '../actions/TwitterActions'
import { Card, Icon, Image ,Grid ,Button , Label ,Rating} from 'semantic-ui-react'
const { Column, Row } = Grid

export default class List extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   favorited : null
    // }
  }

  render(){
    const {tweets} = this.props;
    {if(tweets){
      console.log('in list');
      console.log('tweets: ', tweets)
      return (
        <Grid padded columns={5}>
          {
            tweets.map ( tweet => {
              let {created_at, id, text} = tweet;
              let image = tweet.user.profile_image_url
              let name = tweet.user.name
              return (
                <Column key ={id}>
                  <Card>
                    <Image src={image} href=""/>
                    <Card.Content>
                      <Card.Header>
                        {name}
                      </Card.Header>
                      <Card.Meta>
                        <span className='date'>
                          {created_at}
                        </span>
                      </Card.Meta>
                      <Card.Description>
                        {text}
                      </Card.Description>

                    </Card.Content>
                    {/* <Card.Content extra>
                      <Button
                      color='red'
                      content='Like'
                      icon='heart'
                      label={{ basic: true, color: 'red', pointing: 'left', content:`${review_count}`}}
                      />
                    </Card.Content> */}
                  </Card>
                </Column>
              )
            })}
        </Grid>
      )
    }
  }
}
}
