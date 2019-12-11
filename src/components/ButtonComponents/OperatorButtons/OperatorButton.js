import React from "react";

const OperatorButton = (props) => {

  const { operator, addCalculation } = props;

  return (
    <button
      onClick={() => addCalculation(operator.value)}>
      {operator.char}
    </button>
  );
};

export default OperatorButton;
