import React, { useState, useMemo } from "react";

const ExpensiveComponent = ({ data }) => {
  // Some expensive computation based on props or state
  const computeExpensiveValue = (data) => {
    console.log("Computing expensive value...");
    // Simulating a time-consuming computation
    for (let i = 0; i < 100000000; i++) {
      // Some computation
    }
    return data * 2;
  };

  // Use useMemo to memoize the result of the expensive computation
  const memoizedValue = useMemo(() => computeExpensiveValue(data), [data]);

  return (
    <div>
      <h2>Expensive Component</h2>
      <p>Data: {data}</p>
      <p>Memoized Value: {memoizedValue}</p>
    </div>
  );
};

const MemoExample = () => {
  const [value, setValue] = useState(10);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <ExpensiveComponent data={value} />
    </div>
  );
};

export default MemoExample;
