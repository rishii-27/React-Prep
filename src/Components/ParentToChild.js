// Parent Component
import React from "react";

function ParentComponent() {
  const data = "Hello from Parent!";
  return <ChildComponent data={data} />;
}

// Child Component
function ChildComponent(props) {
  return <p>{props.data}</p>;
}

export default ParentComponent;
