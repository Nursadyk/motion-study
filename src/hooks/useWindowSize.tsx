"use client";
import React from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: 1366,
    height: 768,
  });
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return windowSize;
};

export default useWindowSize;
