import React from "react";
import { Card, Button, Divider,Dimmer,Loader } from "semantic-ui-react";
import './NewsCard.css'
function NewsCard({ data: { description, source, title, url, websiteUrl } }) {
  if (!title) {
    return (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    );
  }
  return (
    <Card className="card" >
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta  as="a" href={websiteUrl}>
        <p className='card__source'> Source: {source}</p>
        </Card.Meta>
        <Divider></Divider>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div >
          <Button inverted color="green" as="a" href={url}>
            Learn more
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default NewsCard;
