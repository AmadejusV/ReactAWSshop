import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const userInputHandler = (event) => {
    setCount(parseInt(event.target.value));
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input onChange={userInputHandler} value={count}></input>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
