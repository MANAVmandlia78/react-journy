import { useEffect, useState } from "react";

function Currentime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("Interval has been setup")
    const IntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
        clearInterval(IntervalId);
        console.log("Cancle The Interval")
    }
  }, []);
  return (
    <p className="lead">
      This is the Currentime: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}.
    </p>
  );
}

export default Currentime;
