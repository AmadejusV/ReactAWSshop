import React, { useEffect, useState } from "react";
import { ReactComponent as SpinIcon } from "../assets/spin.svg";

function Spinner({ text = "Loading..." }) {
  const [dots, setDots] = useState("");
  const [loadingDotCount, setLoadingDotCount] = useState(() => {
    return 0;
  });

  function changeDotCount() {
    setLoadingDotCount((prevState) => (prevState === 3 ? 0 : prevState + 1));
  }

  function incrementLoadingDots() {
    setInterval(changeDotCount, 700);
    // console.log("sat interval");
  }

  function changeDotText() {
    switch (loadingDotCount) {
      case 0:
        setDots("");
        break;
      case 1:
        setDots(".");
        break;
      case 2:
        setDots("..");
        break;
      case 3:
        setDots("...");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    changeDotText();
    console.log(loadingDotCount);
  }, [loadingDotCount]);

  useEffect(() => {
    const incrementingTimer = incrementLoadingDots();

    console.log(loadingDotCount);
    return () => clearInterval(incrementingTimer);
  }, []);

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
