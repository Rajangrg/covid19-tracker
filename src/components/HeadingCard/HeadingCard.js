import React from "react";
import { Container } from "semantic-ui-react";
import IndividualCard from "./IndividualCard/IndividualCard";

function HeadingCard({countries}) {
  return (
    <div className="headingCard">
      <Container >
        <IndividualCard data={countries}></IndividualCard>
      </Container>
    </div>
  );
}

export default HeadingCard;
