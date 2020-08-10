import React, { useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import IndividualCard from "./IndividualCard/IndividualCard";
import { getAllCountriesAPI } from "../../service/disease_shAPI";

function HeadingCard() {
  const [countries, setCountries] = useState({});
  useEffect(() => {
    const getAllInfo = async () => {
      setCountries(await getAllCountriesAPI());
    };
    getAllInfo();
  }, [setCountries]);

  console.log(countries);
  return (
    <div className="headingCard">
      <Container>
        <IndividualCard data={countries}></IndividualCard>
      </Container>
    </div>
  );
}

export default HeadingCard;
