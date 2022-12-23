import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";

const UserProvider = (props) => {
  const [user, setUser] = useState({ data: {}, isAuthenticated: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return async () => {
      const data = await fetch("http://localhost:5000/api/isAuthenticated", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({
          token: localStorage.getItem("token"),
        }),
      });

      const finalData = await data.json();
      if (finalData.success === true) {
        auth(finalData.user);
      }

      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  }, []);

  const auth = (userData) => {
    setUser({ data: { ...userData }, isAuthenticated: true });
  };

  const logOutUser = () => {
    setUser({ data: {}, isAuthenticated: false });
    localStorage.removeItem("token");
  };

  const value = {
    user: user,
    setUser: auth,
    logOutUser: logOutUser,
    loading: loading,
    setLoading: setLoading,
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
