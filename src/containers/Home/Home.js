import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { getAllCountriesAPI } from "../../service/disease_shAPI";

function Home() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getAllInfo = async () => {
         setCountries(await getAllCountriesAPI());
    };
    getAllInfo();
  }, [setCountries]);

  console.log(countries)
  return (
    <div>
      <Header></Header>
      <h1>Covid 19 Tracker</h1>
    </div>
  );
}

export default Home;
