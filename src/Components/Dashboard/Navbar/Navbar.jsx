import React from "react";
import styles from "./Navbar.module.css";
import Avatar from "react-avatar";
import Card from "../../UI/Card";

const Navbar = () => {
  return (
    <Card className={styles.navbar}>
      <h1>Dashboard</h1>
      <div className={styles.avatar}>
        <span className={styles.about}>About page</span>
        <Avatar name="Aman Sharma" textToSizeRatio="1" round={true} size="40" />
      </div>
    </Card>
  );
};

export default Navbar;
