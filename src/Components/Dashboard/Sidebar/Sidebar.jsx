import React from "react";
import styles from "./Sidebar.module.css";
import Card from "../../UI/Card";

const Sidebar = () => {
  return (
    <Card className={styles.sidebar}>
      <h1>Options</h1>
      <ul>
        <li>
          <i class="fa-solid fa-chart-column"></i> Bar chart
        </li>
        <li>
          <i class="fa-solid fa-chart-line"></i> Line chart
        </li>
        <li>
          <i class="fa-solid fa-calculator"></i> Graph
        </li>
        <li>
          <i class="fa-solid fa-earth-americas"></i> Map
        </li>
      </ul>
      <ul>
        <li>
          <i class="fa-solid fa-upload"></i> Upload file
        </li>
      </ul>
    </Card>
  );
};

export default Sidebar;
