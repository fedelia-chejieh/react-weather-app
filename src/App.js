import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="Search-input"
              />
            </div>
            <div className="col-3">
              <button className="Search-button">Search</button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
