import React from "react";
import Header from "../../components/Header/Header";
import './Home.css'
import HeadingCard from "../../components/HeadingCard/HeadingCard";

function Home() {
  return (
    <div className="home">
      <Header></Header>
      <h1 className="home__title">Covid-19 Tracker</h1>
      <HeadingCard></HeadingCard>
    </div>
  );
}

export default Home;
