import React from "react";
import { Card, Grid, Dimmer, Loader } from "semantic-ui-react";
import CountUp from "react-countup";
import "./IndividualCard.css";

function IndividualCard({ data: { cases, deaths, recovered, updated } }) {
  if (!cases) {
    return (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    );
  }

  //console.log(cases);
  return (
    <Grid container columns={3} doubling stackable>
      <Grid.Column stretched>
        <Card className="individualCard__card">
          <Card.Content>
            <Card.Header className="individualCard__header">
              Total Cases
            </Card.Header>
            <Card.Description>
              <CountUp
                start={0}
                end={cases}
                duration={2.75}
                separator=","
                className="individualCard__countUp"
              />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            Updated on: {new Date(updated).toDateString()}
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column stretched>
        <Card className="individualCard__card">
          <Card.Content>
            <Card.Header className="individualCard__header">
              Total Deaths
            </Card.Header>
            <Card.Description>
              <CountUp
                start={0}
                end={deaths}
                duration={2.75}
                separator=","
                className="individualCard__countUp"
              />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            Updated on: {new Date(updated).toDateString()}
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column stretched>
        <Card className="individualCard__card">
          <Card.Content>
            <Card.Header className="individualCard__header">
              Total Recovered
            </Card.Header>
            <Card.Description>
              <CountUp
                start={0}
                end={recovered}
                duration={2.75}
                separator=","
                className="individualCard__countUp"
              />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            Updated on: {new Date(updated).toDateString()}
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default IndividualCard;
