import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import Avatar from "react-avatar";
import Card from "../../UI/Card";
import UserContext from "../../../Store/UserContext";

const Navbar = () => {
  const ctx = useContext(UserContext);

  const logOutUser = () => {
    ctx.setLoading(true);
    ctx.logOutUser();
    setTimeout(() => {
      ctx.setLoading(false);
    }, 2000);
    console.log(ctx.user.data.name);
  };

  return (
    <Card className={styles.navbar}>
      <h1>Dashboard</h1>
      <div className={styles.avatar}>
        <span onClick={logOutUser} className={styles.about}>
          Log out
        </span>
        <Avatar
          name={ctx.user.data.name}
          textToSizeRatio="1"
          round={true}
          size="40"
        />
      </div>
    </Card>
  );
};

export default Navbar;
