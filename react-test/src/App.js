import React from "react";
import Link from "./components/Link/Link";
import Input from './components/Input/Input'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link>ClickMe</Link>
      <div className="container">
        <Input />
      </div>
    </div>
  );
}

export default App;
