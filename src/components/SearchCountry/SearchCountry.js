import React from "react";
import { Dropdown, Container } from "semantic-ui-react";
import './SearchCountry.css'


function SearchCountry() {
  return (
  <Container className="searchCountry__container"  >
    <Dropdown
        placeholder="Search Country..."
        fluid
        search
        selection
        options="country name and imagedropdown"
      />
  </Container> 
  );
}

export default SearchCountry;
