import "./App.css";
import ChildToParent from "./Components/ChildToParent";
import ControlledInput from "./Components/ControlledInput";
import MyComponent from "./Components/CustomHooks";
import Example from "./Components/Effect";
import Hoc from "./Components/HOC/Hoc";
import LifecycleExample from "./Components/LifecycleExample";
import ParentComponent from "./Components/ParentToChild";
import UncontrolledInput from "./Components/UncontrolledInput";

function App() {
  return (
    <div className="App">
      <h1>---Controlled Vs UnControlled Inputs---</h1>
      <ControlledInput />
      <UncontrolledInput />
      <h1>---useEffect Example---</h1>
      <Example />
      <h1>---Parent To Child---</h1>
      <ParentComponent />
      <h1>---Child To Parent---</h1>
      <ChildToParent />
      <h1>---Higher Order functions---</h1>
      <Hoc />
      <h1>---Component LifeCycle---</h1>
      <LifecycleExample />
      <h1>---Custom Hooks---</h1>
      <MyComponent />
    </div>
  );
}

export default App;
