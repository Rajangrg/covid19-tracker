import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import HeadingCard from "../../components/HeadingCard/HeadingCard";
import SearchCountry from "../../components/SearchCountry/SearchCountry";
import {getAllCountriesAPI,getCountryInfoAPI} from "../../service/disease_shAPI";

function Home() {
  const [countries, setCountries] = useState({});
  const [countryName, setCountryName] = useState({});

  useEffect(() => {
    const getAllInfo = async () => {
      setCountries(await getAllCountriesAPI());
    };
    getAllInfo();
  }, [setCountries]);

  const onCountryChange = async (e, { value }) => {
    if (value) {
      setCountryName(value);
      setCountries(await getCountryInfoAPI(value));
    }
  };

  const undoInfo = async (e) => {
    e.preventDefault();
    setCountryName("");
    setCountries(await getAllCountriesAPI());
  };
  //console.log(countries)

  return (
    <div className="home">
      <Header></Header>
      <h1 className="home__title">Covid-19 Tracker</h1>
      <SearchCountry
        searchCountry={onCountryChange}
        undo={undoInfo}
        name={countryName}
      ></SearchCountry>
      <HeadingCard countries={countries}></HeadingCard>
    </div>
  );
}

export default Home;
