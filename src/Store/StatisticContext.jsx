import React from "react";

const StatisticContext = React.createContext({
  option: 1,
  setOption: (opt) => {},
});

export default StatisticContext;
