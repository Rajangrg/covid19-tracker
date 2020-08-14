import React from "react";
import { Segment, Statistic } from "semantic-ui-react";

function InfoCard({ data: { todayCases, todayDeaths, todayRecovered,active }, name }) {
  return (
    <Segment >
    <h4>Today Covid-19 state in {name} </h4>
      <Statistic.Group size='tiny'>
        <Statistic>
          <Statistic.Value >{todayCases}</Statistic.Value>
          <Statistic.Label>Today cases</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{todayRecovered}</Statistic.Value>
          <Statistic.Label>Today Recovered</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{todayDeaths}</Statistic.Value>
          <Statistic.Label>Today Deaths</Statistic.Label>
        </Statistic>
        <Statistic>
          <Statistic.Value>{active}</Statistic.Value>
          <Statistic.Label>Active</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Segment>
  );
}

export default InfoCard;
