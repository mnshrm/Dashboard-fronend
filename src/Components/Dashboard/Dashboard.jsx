import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Statistics from "./Statistics/Statistics";
import Background from "../Authentication/Background";
import Card from "../UI/Card";

const Dashboard = () => {
  return (
    <Card className={styles.dashboard}>
      <Navbar />
      <Sidebar />
      <Statistics />
    </Card>
  );
};

export default Dashboard;
