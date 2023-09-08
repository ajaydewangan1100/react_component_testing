import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Application } from "./components/application/Application";
import { Skills } from "./components/skills/Skills";
import { Counter } from "./components/counter/Counter";
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/mui-mode";

function App() {
  return (
    <div className="App">
      {/* getBy and getAllBy - video 18 */}
      <Application />
      <hr />
      {/* video 26 */}
      <Skills skills={["NodeJS", "ExpressJS"]} />
      <hr />
      {/* User Interactions - video 36 */}
      <Counter />
      <hr />
      {/* rendering provider - video 38 */}
      <AppProviders>
        <div className="App">
          <MuiMode />
        </div>
      </AppProviders>
      <hr />
    </div>
  );
}

export default App;
