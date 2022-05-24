import "./App.css";
import cwind from "./cwind";

function App() {
  cwind("bg-red-500");
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-slate-500">This is some text</div>
      </header>
    </div>
  );
}

export default App;
