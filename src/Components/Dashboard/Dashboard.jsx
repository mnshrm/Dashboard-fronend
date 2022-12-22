import React from "react";
import styles from "./Dashboard.module.css";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Statistics from "./Statistics/Statistics";
import Card from "../UI/Card";
import StatProvider from "../../Store/StatProvider.jsx";

const Dashboard = () => {
  return (
    <StatProvider>
      <Card className={styles.dashboard}>
        <Navbar />
        <Sidebar />
        <Statistics />
      </Card>
    </StatProvider>
  );
};

export default Dashboard;
