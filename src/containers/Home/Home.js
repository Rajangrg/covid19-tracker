import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import HeadingCard from "../../components/HeadingCard/HeadingCard";
import SearchCountry from "../../components/SearchCountry/SearchCountry";
import {
  getAllCountriesAPI,
  getCountryInfoAPI,
} from "../../service/disease_shAPI";
import BarGraph from "../../components/Diagram/BarGraph/BarGraph";

function Home() {
  const [countries, setCountries] = useState({});
  const [countryName, setCountryName] = useState('worldwide');

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
    setCountryName("worldwide");
    setCountries(await getAllCountriesAPI());
  };
  //console.log(countries)

  return (
    <div className="home">
      <Header />
      <h1 className="home__title">Covid-19 Tracker</h1>
      <SearchCountry
        searchCountry={onCountryChange}
        undo={undoInfo}
        name={countryName}
      />
      <HeadingCard countries={countries} />
      <BarGraph  data={countries} name={countryName}/>
    </div>
  );
}

export default Home;
