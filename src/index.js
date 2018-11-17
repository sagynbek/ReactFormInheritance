import React from "react";
import ReactDOM from "react-dom";
import FormComponent from "./components/FormComponent";
import { GridComponent } from "./components/GridComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <FormComponent />
      <GridComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
