import React from "react";
import styles from "./Sidebar.module.css";
import Card from "../../UI/Card";
import Option from "./Option";

const options = [
  { heading: "Bar Chart", icon: "fa-regular fa-chart-bar" },
  { heading: "Line Chart", icon: "fa-solid fa-chart-line" },
  { heading: "Scatter Chart", icon: "fa-brands fa-uncharted" },
  { heading: "Map", icon: "fa-solid fa-earth-americas" },
  { heading: "Upload Image", icon: "fa-solid fa-upload" },
];

const Sidebar = () => {
  return (
    <Card className={styles.sidebar}>
      <h1>Options</h1>
      <ul>
        {options.map((option, ind) => (
          <Option key={ind} index={ind} {...option} />
        ))}
      </ul>
    </Card>
  );
};

export default Sidebar;
