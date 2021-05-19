import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const increment = () => {
    if (count === "") {
      setCount(1);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const userInputHandler = (event) => {
    const val = event.target.value;

    if (!val) {
      setCount(val);
      return;
    }
    setCount(parseInt(val));
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" onChange={userInputHandler} value={count}></input>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
