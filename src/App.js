import "./App.css";
import cwind, { initCwind } from "./cwind";
import resolveConfig from "tailwindcss/resolveConfig";

function App() {
  const config = resolveConfig("../tailwind.config.js");
  initCwind(config);
  cwind("");
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-slate-500">This is some text</div>
      </header>
    </div>
  );
}

export default App;
