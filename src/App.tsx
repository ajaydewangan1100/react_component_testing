import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      {/* getBy and getAllBy - video 18 */}
      <Application />
      <hr />
      {/* video 26 */}
      <Skills skills={["NodeJS", "ExpressJS"]} />
      <hr />
      {/*  */}
    </div>
  );
}

export default App;
