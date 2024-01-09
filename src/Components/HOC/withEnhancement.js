// withEnhancement.js (Higher Order Component)
import React from "react";

const withEnhancement = (WrappedComponent) => {
  // This HOC adds a border and changes the color
  const EnhancedComponent = (props) => {
    return (
      <div style={{ border: "5px solid red", color: "green" }}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return EnhancedComponent;
};

export default withEnhancement;
