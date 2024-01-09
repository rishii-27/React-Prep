// SiblingComponent1.js
import React from "react";
import { useLocation } from "react-router-dom";

const SiblingComponent1 = () => {
  const location = useLocation();
  const data = location.state;
  console.log(location);
  return (
    <div>
      <h1>Sibling Component 1</h1>
      <p>{data && data.name}</p>
    </div>
  );
};

export default SiblingComponent1;
