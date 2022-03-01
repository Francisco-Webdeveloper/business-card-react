import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="container">
      <Info />
      <main>
        <About />
        <Interests />
      </main>
      {/* 
            <footer /> */}
    </div>
  );
}

export default App;
