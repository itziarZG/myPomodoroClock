import "./App.css";
import useState from "react";
import Clock from "./components/clock/Clock";

function App() {
  // const [cicle, setcicle] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
