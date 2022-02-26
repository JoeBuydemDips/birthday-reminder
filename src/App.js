import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  return (
    <main>
      <sectoin className="container">
        <h3> 0 birthdays today</h3>
        <List />
        <button onClick={() => {}}>clear all</button>
      </sectoin>
    </main>
  );
}

export default App;
