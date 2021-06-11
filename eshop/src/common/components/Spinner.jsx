import React, { useEffect, useState } from "react";
import { ReactComponent as SpinIcon } from "../assets/spin.svg";

function Spinner({ text = "Loading..." }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const incrementingTimer = setInterval(() => {
      setDots((prevState) => (prevState.length >= 3 ? "" : prevState + "."));
    }, 700);

    console.log(dots);
    return () => clearInterval(incrementingTimer);
  }, [dots]);

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <SpinIcon />
      <div className="mt-1 font-semibold">
        {text}
        {dots}
      </div>
    </div>
  );
}

export default Spinner;
