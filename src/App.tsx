import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";

function App() {
  return (
    <div className="App">
      {/* getByRole - video 18 */}
      <Application />
      <hr />
    </div>
  );
}

export default App;
