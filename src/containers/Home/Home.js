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
import { Grid,Responsive } from "semantic-ui-react";
import InfoCard from "../../components/TodayInfoCard/InfoCard";

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

  return (
    <div className="home">
      <Header />
      <h1 className="home__title">Covid-19 Tracker</h1>
      <SearchCountry
        searchCountry={onCountryChange}
        undo={undoInfo}
        name={countryName}
      />
      <Grid columns={2} padded doubling>
        <Grid.Column>
          <HeadingCard countries={countries} />
          <InfoCard data={countries} name={countryName}></InfoCard>
          <Responsive minWidth={450}>
            <PieChart data={countries} name={countryName} />
          </Responsive>
        </Grid.Column>
        <Grid.Column><LatestNews /></Grid.Column>
      </Grid>
    </div>
  );
}

export default Home;
