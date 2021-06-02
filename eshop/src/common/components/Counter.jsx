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
    <div className="border-blue-300 border-2 inline-block mr-2">
      <button className="bg-white w-6 text-blue-200" onClick={decrement}>
        -
      </button>
      <input
        className="appearance-none w-8 text-center"
        type="number"
        onChange={userInputHandler}
        value={count}
      ></input>
      <button className="bg-white w-6 text-blue-200" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
