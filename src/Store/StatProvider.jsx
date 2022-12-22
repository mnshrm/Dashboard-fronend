import StatisticContext from "./StatisticContext";
import React, { useState } from "react";

const StatProvider = (props) => {
  const [option, setOption] = useState(3);

  const changeOption = (opt) => {
    setOption(opt);
  };

  const value = {
    option: option,
    setOption: changeOption,
  };

  return (
    <StatisticContext.Provider value={value}>
      {props.children}
    </StatisticContext.Provider>
  );
};

export default StatProvider;
