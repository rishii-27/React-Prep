import React from "react";
import PlainComponent from "./PlainComponent";
import withEnhancement from "./withEnhancement";

const EnhancedComponent = withEnhancement(PlainComponent);

const Hoc = () => {
  return <EnhancedComponent message="Hello, I'm enhanced!" />;
};

export default Hoc;
