// SiblingPass.js
import React from "react";
import { useNavigate } from "react-router-dom";

const SiblingPass = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/sibling-component-2/John%20Doe");
  };
  const handleClick2 = () => {
    navigate("/sibling-component-1", {
      state: {
        name: "John Doe",
      },
    });
  };

  return (
    <div>
      <h1>Sibling Pass Component</h1>
      <button onClick={handleClick1}>Navigate to Sibling Component 2</button>
      <button onClick={handleClick2}>Navigate to Sibling Component 1</button>
    </div>
  );
};

export default SiblingPass;
