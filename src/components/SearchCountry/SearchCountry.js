import React, { useEffect, useState } from "react";
import { Dropdown, Container, Dimmer, Loader, Button } from "semantic-ui-react";
import "./SearchCountry.css";
import { getCountriesInfoAPI } from "../../service/disease_shAPI";

function SearchCountry({ searchCountry, undo, name }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getcountryBasicInfo = async () => {
      setCountries(await getCountriesInfoAPI());
    };
    getcountryBasicInfo();
  }, []);

  if (!countries) {
    return (
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
    );
  }

  return (
    <Container className="searchCountry__container" text>
      <Dropdown
        onChange={searchCountry}
        placeholder="Search or select country..."
        fluid
        search
        selection
        options={countries}
        value= {name}
      />
      <Button  icon="undo" onClick={undo} />
    </Container>
  );
}

export default SearchCountry;
