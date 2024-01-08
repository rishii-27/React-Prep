import React from "react";

function UncontrolledInput() {
  return (
    <div>
      <label>Uncontrolled Input:</label>
      <input type="text" defaultValue="Default Value" />
      {/* No state updates on input changes */}
    </div>
  );
}

export default UncontrolledInput;
