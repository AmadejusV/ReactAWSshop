import { useEffect, useState } from "react";

const dotsIntervalInMs = 300;

const useLoadingDots = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const incrementingTimer = setInterval(() => {
      setDots((prevState) => (prevState.length >= 3 ? "" : prevState + "."));
    }, dotsIntervalInMs);

    console.log(dots);
    return () => clearInterval(incrementingTimer);
  }, []);

  return {
    dots,
  };
};

export default useLoadingDots;
