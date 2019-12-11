import React from "react";

const SpecialButton = (props) => {

  const { special, addCalculation } = props;

  return (
  <button onClick={() => addCalculation(special)}>{special}</button>
  );
};

export default SpecialButton;
