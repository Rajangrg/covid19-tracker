import React from "react";
import Header from "../../components/Header/Header";

import HeadingCard from "../../components/HeadingCard/HeadingCard";



function Home() {
 
  return (
    <div>
      <Header></Header>
      <h1>Covid 19 Tracker</h1>
        <HeadingCard></HeadingCard>
    </div>
  );
}

export default Home;
