import React from 'react'
import { Grid, Image,Card, Icon } from 'semantic-ui-react'

function LatestNews() {
    return (
        <div>
                <Grid columns={1} padded>
      <Grid.Column>
      <Card
    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    
  />
      </Grid.Column>
      <Grid.Column>
      <Card
    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
    
  />
      </Grid.Column>
    </Grid>
        </div>
    )
}

export default LatestNews
