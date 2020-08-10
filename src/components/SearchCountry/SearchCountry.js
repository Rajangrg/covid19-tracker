import React, { useEffect, useState } from "react";
import { Dropdown, Container, Dimmer, Loader, Button } from "semantic-ui-react";
import "./SearchCountry.css";
import { getCountriesInfoAPI } from "../../service/disease_shAPI";

function SearchCountry({ searchCountry, undo }) {
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
        placeholder="Search Country..."
        fluid
        search
        selection
        options={countries}
        
      />
      <Button circular icon="undo" onClick={undo} />
    </Container>
  );
}

export default SearchCountry;
