// Parent Component
import React from "react";

function ChildToParent() {
  const handleChildClick = (message) => {
    console.log("In parentComponent:", message);
  };

  return <ChildComponent onClick={handleChildClick} />;
}

// Child Component

function ChildComponent(props) {
  const handleClick = () => {
    props.onClick("Hello from Child!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default ChildToParent;
