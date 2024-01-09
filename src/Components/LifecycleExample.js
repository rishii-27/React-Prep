import React, { Component } from "react";

class LifecycleExample extends Component {
  // Mounting Phase
  constructor(props) {
    super(props);
    console.log("1. Constructor - Mounting Phase");
    this.state = { data: "Initial Data" };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(
      "2. getDerivedStateFromProps - Mounting and Updating Phase",
      nextProps,
      nextState
    );
    return null;
  }

  componentDidMount() {
    console.log("3. componentDidMount - Mounting Phase");
    // Fetch data or perform other side effects after the component mounts
  }

  // Updating Phase
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "4. shouldComponentUpdate - Updating Phase",
      nextProps,
      nextState
    );
    return true; // Return false to prevent the component from updating
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "5. getSnapshotBeforeUpdate - Updating Phase",
      prevProps,
      prevState
    );
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "6. componentDidUpdate - Updating Phase",
      prevProps,
      prevState,
      snapshot
    );
    // Perform side effects after the component updates
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log("7. componentWillUnmount - Unmounting Phase");
    // Cleanup or unsubscribe from external services before the component is removed
  }

  // Error Handling
  componentDidCatch(error, errorInfo) {
    console.log("Error Boundary:", error, errorInfo);
    // Handle errors and display a fallback UI
  }

  // Rendering
  render() {
    console.log("Render - Mounting and Updating Phase");
    return <div>{this.state.data}</div>;
  }
}

export default LifecycleExample;


//*********Explanation:**********

// Mounting Phase:

// constructor: Initializes the component state.
// getDerivedStateFromProps: Receives props and returns a new state.
// componentDidMount: Called after the component is inserted into the DOM.
// Updating Phase:

// shouldComponentUpdate: Determines whether the component should update.
// getSnapshotBeforeUpdate: Captures information before the update.
// componentDidUpdate: Called after the component updates.
// Unmounting Phase:

// componentWillUnmount: Called just before the component is removed from the DOM.
// Error Handling:

// componentDidCatch: Catches errors during rendering.
// Rendering:

// render: Returns JSX to be rendered on the screen.
// Remember that with the introduction of hooks in functional components, some of these lifecycle methods are not available. Hooks like useEffect are used for side effects and lifecycle behavior in functional components.