import React from "react";

const UserContext = React.createContext({
  user: {},
  setUser: (userData) => {},
  logOutUser: {},
  loading: true,
  setLoading: () => {},
});

export default UserContext;
