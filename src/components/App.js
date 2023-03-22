import React, { useState } from "react";

const ButtonCounter = () => {
  const [ count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Button</button>
      <p>Button clicked {count} times.</p>
    </>
  );
};

export default ButtonCounter;
