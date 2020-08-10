import React from "react";
import {  Pie } from "react-chartjs-2";
import { Container } from "semantic-ui-react";
import "./PieChart.css";

function PieChart({ data: { cases, deaths, recovered, active }, name }) {
 console.log(active)
  const PieChart = cases ?  (
    <Pie 
     data={{
      labels: ["Infected", "Recovered", "Deaths", "Active"],
      datasets: [{
      data: [cases, recovered, deaths, active],
      backgroundColor: [
      '#E58B8B',
      '#5EABA1',
      '#48ACD1',
      '#FEEEB4'
      ],
      hoverBackgroundColor: [
      '#C83050',
      '#306863',
      '#4072B8',
      '#E6B141'
      ]
    }]
     }}

     options={{
        legend: { display: true },
        title: { display: true, text: `Current Covid-19 state in ${name}` },
      }}
    >
    </Pie>
  ): null;
  
  
  return (
    <Container className="pieChart__container">{name && PieChart}</Container>
  );
}

export default PieChart;

