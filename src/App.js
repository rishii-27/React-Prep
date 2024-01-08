import "./App.css";
import ControlledInput from "./Components/ControlledInput";
import Example from "./Components/Effect";
import UncontrolledInput from "./Components/UncontrolledInput";

function App() {
  return (
    <div className="App">
      <h1>Controlled Vs UnControlled Inputs</h1>
      <ControlledInput />
      <UncontrolledInput />
      <h1>useEffect Example</h1>
      <Example />
    </div>
  );
}

export default App;
