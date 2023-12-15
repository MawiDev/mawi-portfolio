import { useEffect, useState } from "react";

function TimeClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{date.toLocaleTimeString("IT")}</span>;
}

export default TimeClock;
