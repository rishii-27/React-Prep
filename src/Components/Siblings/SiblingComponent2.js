// SiblingComponent2.js
import React from "react";
import { useParams } from "react-router-dom";

const SiblingComponent2 = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Sibling Component 2</h1>
      <p>{name}</p>
    </div>
  );
};

export default SiblingComponent2;
