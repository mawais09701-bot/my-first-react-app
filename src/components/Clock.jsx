import { useEffect, useState } from "react";

function Clock() {
  const [secondCount, setSecondCount] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setSecondCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(key)
  }, []);

  return <h1>Seconds: {secondCount} has Passed</h1>;
}

export default Clock;
