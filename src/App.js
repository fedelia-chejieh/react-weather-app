import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input
            type="search"
            placeholder="Enter a city.."
            className="Search-input"
          />
          <button className="Search-button">Search</button>
        </form>
      </header>
    </div>
  );
}

export default App;
