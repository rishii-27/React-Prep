import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SiblingComponent1 from "./SiblingComponent1";
import SiblingComponent2 from "./SiblingComponent2";
import SiblingPass from "./SiblingPass";

const MainSibling = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/sibling-component-1" element={<SiblingComponent1 />} />
        <Route path="/sibling-component-2/:name" element={<SiblingComponent2 />} />
        <Route path="/" element={<SiblingPass />} />
      </Routes>
    </div>
  </Router>
);

export default MainSibling;
