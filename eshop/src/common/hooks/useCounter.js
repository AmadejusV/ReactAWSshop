import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const onIncrement = () => {
    if (count < 1 || count === "") {
      setCount(1);
      return;
    }
    setCount((prevCount) => prevCount + 1);
  };

  const onDecrement = () => {
    if (count < 1 || count === "") {
      setCount(0);
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };

  const onInputChange = (event) => {
    const val = event.target.value;

    if (!val) {
      setCount(val);
      return;
    }
    setCount(parseInt(val));
  };
  return {
    count,
    onIncrement,
    onDecrement,
    onInputChange,
  };
}

export default useCounter;
