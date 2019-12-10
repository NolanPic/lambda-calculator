import React from "react";

const NumberButton = (props) => {

  const { number, addCalculation } = props;

  return (
    <button onClick={() => addCalculation(number)}>{number}</button>
  );
};

export default NumberButton;
