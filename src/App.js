import "./App.css";
import ControlledInput from "./Components/ControlledInput";
import UncontrolledInput from "./Components/UncontrolledInput";

function App() {
  return (
    <div className="App">
      <h1>Controlled Vs UnControlled Inputs</h1>
      <ControlledInput />
      <UncontrolledInput />
    </div>
  );
}

export default App;
