import React, { useContext, useState } from "react";
import styles from "../Form.module.css";
import Button from "../../UI/Button";
import UserContext from "../../../Store/UserContext";

const LogIn = (props) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const ctx = useContext(UserContext);
  const [invalid, setInvalid] = useState({ status: false, message: "" });

  const logInUser = async (e) => {
    e.preventDefault();
    ctx.setLoading(true);

    if (
      formData.email.trim().length !== 0 &&
      formData.password.trim().length !== 0
    ) {
      const res = await fetch(
        "https://grand-gnome-5e4f7a.netlify.app/api/login",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const resData = await res.json();
      if (resData.success) {
        localStorage.setItem("token", resData.token);
        ctx.setUser({ data: resData.user, isAuthenticated: true });
        setFormData({ email: "", password: "" });
      } else if (res.status === 404) {
        setInvalid({ status: true, message: "User not found, please sign up" });
      } else if (res.status === 401) {
        setInvalid({ status: true, message: "Invalid email and password" });
      }
    } else {
      setInvalid({ status: true, message: "Enter email and password" });
    }

    setTimeout(() => {
      ctx.setLoading(false);
    }, 1000);
  };

  const emailChange = (e) => {
    const updatedValue = e.target.value;
    setFormData((pv) => {
      return {
        ...pv,
        email: updatedValue,
      };
    });
  };

  const passChange = (e) => {
    const updatedValue = e.target.value;
    setFormData((pv) => {
      return {
        ...pv,
        password: updatedValue,
      };
    });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    props.optionChangeHandler();
  };

  return (
    <form className={styles["card-form"]}>
      <h1>Log in</h1>
      <label htmlFor="email">Email</label>
      <input
        onChange={emailChange}
        value={formData.email}
        type={"email"}
        placeholder="xxx@gmail.com"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={passChange}
        value={formData.password}
        type={"password"}
      />
      {invalid.status && (
        <span style={{ color: "red" }}>{invalid.message}</span>
      )}
      <Button onClick={logInUser} type="submit">
        Sign in
      </Button>
      <Button onClick={clickHandler} className={styles["sign-up"]}>
        Create new Account
      </Button>
    </form>
  );
};

export default LogIn;
