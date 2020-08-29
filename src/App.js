import React from "react";
import "./App.css";
import CollegesList from "./CollegesList/CollegesList";

function App() {
  return (
    <div className="App">
      <div className="text-grey">Colleges in North India</div>
      <CollegesList />
    </div>
  );
}

export default App;
