import React from "react";
import { Card, Button, Divider } from "semantic-ui-react";
import './NewsCard.css'
function NewsCard({ data: { description, publishedAt, title, url } }) {
  return (
    <Card className="card" >
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta className='card__publisheAt'>
          Published at: {new Date(publishedAt).toDateString()}
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
