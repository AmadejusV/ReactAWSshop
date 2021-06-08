import React, { useState } from "react";
import Button from "./Button";

const buttonClass = "bg-white w-6 p-2 text-blue-200 focus:outline-none ";
const btnGerulisStyle =
  "font-bold transform scale-125 duration-200 hover:translate-y-0.5 active:translate-y-0.5";

function Counter() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const increment = () => {
    if (count < 1 || count === "") {
      setCount(1);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count < 1 || count === "") {
      setCount(0);
      return;
    }
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
      <Button className={buttonClass} onClick={decrement}>
        -
      </Button>
      <input
        className="appearance-none w-10 text-center focus:outline-none p-2"
        type="number"
        onChange={userInputHandler}
        value={count}
      ></input>
      <Button className={buttonClass} onClick={increment}>
        +
      </Button>
    </div>
  );
}

export default Counter;
