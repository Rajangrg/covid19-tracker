import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import HeadingCard from "../../components/HeadingCard/HeadingCard";
import SearchCountry from "../../components/SearchCountry/SearchCountry";
import {
  getAllCountriesAPI,
  getCountryInfoAPI,
} from "../../service/disease_shAPI";
import PieChart from "../../components/Diagram/PieChart/PieChart";
import LatestNews from "../LatestNews/LatestNews";

function Home() {
  const [countries, setCountries] = useState({});
  const [countryName, setCountryName] = useState("worldwide");

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
      <div className="home__layout">
        <div className="home__layoutLeft">
          <HeadingCard countries={countries} />
          <PieChart data={countries} name={countryName} />
        </div>
        <div className="home__layoutRight">
          <LatestNews/>
        </div>
      </div>
    </div>
  );
}

export default Home;
