import * as React from "react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

import "./styles.css";

const toggleMachine = Machine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: {
      on: { TOGGLE: "active" }
    },
    active: {
      on: { TOGGLE: "inactive" }
    }
  }
});

export const Toggler = () => {
  const [state, send] = useMachine(toggleMachine);

  return (
    <button onClick={() => send("TOGGLE")}>
      {state.value === "inactive"
        ? "Click to activate"
        : "Active! Click to deactivate"}
    </button>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Toggler />
    </div>
  );
}
