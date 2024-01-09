import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const ReactRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);

export default ReactRouter;
