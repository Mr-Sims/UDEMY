import { useState, useEffect } from "react";

const useCounter = (value, operator, step) => {
    const [counter, setCounter] = useState(value);

    useEffect(() => {
      const interval = setInterval(() => {
        if(operator === '+') {
            setCounter((prevCounter) => prevCounter + step);
        }
        else if (operator === '-') {
            setCounter((prevCounter) => prevCounter - step);
        }
        }, 1000);
        
  
      return () => clearInterval(interval);
    }, []);

    return counter;
};

export default useCounter;