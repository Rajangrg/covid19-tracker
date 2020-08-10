import React from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "semantic-ui-react";
import "./BarGraph.css";

function BarGraph({ data: { cases, deaths, recovered }, name }) {
  const barchart = cases ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(64, 114, 184, 1)",
              "rgba(133, 223, 167, 1)",
              "rgba(200, 90, 96, 1)",
            ],
            data: [cases, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current Covid-19 state in ${name}` },
      }}
    />
  ) : null;

  return (
    <Container className="bargraph__container">{name && barchart}</Container>
  );
}

export default BarGraph;
