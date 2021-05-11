import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button>-</button>
      <input value={count}></input>
      <button>+</button>
    </div>
  );
}

export default Counter;
