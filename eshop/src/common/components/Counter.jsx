import React, { useState } from "react";
import Button from "./Button";

const buttonClass = "bg-white w-6 p-2 text-blue-200 focus:outline-none ";
const btnGerulisStyle =
  "font-bold transform scale-125 duration-200 hover:translate-y-0.5 active:translate-y-0.5";

function Counter({ className, counterProps }) {
  return (
    <div className={`border-blue-300 border-2 inline-block mr-2 ${className}`}>
      <Button className={buttonClass} onClick={counterProps.onDecrement}>
        -
      </Button>
      <input
        className="appearance-none w-10 text-center focus:outline-none p-2"
        type="number"
        onChange={counterProps.onInputChange}
        value={counterProps.count}
      ></input>
      <Button className={buttonClass} onClick={counterProps.onIncrement}>
        +
      </Button>
    </div>
  );
}

export default Counter;
