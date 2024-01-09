import "./App.css";
import ControlledInput from "./Components/ControlledInput";
import Example from "./Components/Effect";
import ParentComponent from "./Components/ParentToChild";
import UncontrolledInput from "./Components/UncontrolledInput";

function App() {
  return (
    <div className="App">
      <h1>Controlled Vs UnControlled Inputs</h1>
      <ControlledInput />
      <UncontrolledInput />
      <h1>useEffect Example</h1>
      <Example />
      <h1>Parent To Child</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
