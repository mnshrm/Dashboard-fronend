import React from "react";
import styles from "../Form.module.css";
import Button from "../../UI/Button";

const SignUp = (props) => {
  const clickHandler = (e) => {
    e.preventDefault();
    props.optionChangeHandler();
  };

  return (
    <form className={styles["card-form"]}>
      <h1>Sign up </h1>

      <label htmlFor="name">Name</label>
      <input type={"text"} placeholder="Sam" />

      <label htmlFor="email">Email</label>
      <input type={"email"} placeholder="xxx@gmail.com" />

      <label htmlFor="password">Password</label>
      <input type={"password"} />

      <Button className={styles["sign-up"]} type="submit">
        Create new Account
      </Button>
      <Button onClick={clickHandler}>Sign in</Button>

      <hr />

      <div className={styles["alt-option"]}>
        <i className={`${styles.icon} fa-brands fa-google`}></i>
        <span>Sign up with google</span>
      </div>
    </form>
  );
};

export default SignUp;
