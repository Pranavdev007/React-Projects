//Create a counter App in which one counter moves by 1 sec and other by 1/2 sec - eg - 1st-> 1,2,3  2nd 0.5,1,1.5
import React, { useEffect, useState } from "react";

function Counter() {
  useEffect(() => {
    let timer = setInterval(() => {
      setCounter1(counter1 + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  const [counter1, setCounter1] = useState(0);

  return (
    <div>
      <p>{counter1}</p>
      <p>{counter1 / 2}</p>
    </div>
  );
}

export default Counter;
