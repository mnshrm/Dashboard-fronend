import React, { useContext } from "react";
import styles from "./Statistics.module.css";
import Card from "../../UI/Card";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import ScatterChart from "./Charts/ScatterChart";
import Map from "./Charts/Map";
import StatisticContext from "../../../Store/StatisticContext";
import Spreadsheet from "./spreadsheet/Spreadsheet";

const options = [
  { heading: "Bar Chart", chart: <BarChart /> },
  { heading: "Line Chart", chart: <LineChart /> },
  { heading: "Scatter Chart", chart: <ScatterChart /> },
  { heading: "Map", chart: <Map /> },
  { heading: "Upload spreadsheet", chart: <Spreadsheet /> },
];

const Statistics = () => {
  const ctx = useContext(StatisticContext);

  return (
    <Card className={styles.stats}>
      <h1>{options[ctx.option].heading}</h1>
      <div className={styles.chart}>{options[ctx.option].chart}</div>
    </Card>
  );
};

export default Statistics;
