import React from "react";
import Info from "./components/Info";
import About from "./components/About";

function App() {
  return (
    <div className="container">
      <Info />
      <main>
        <About />
      </main>
      {/* 
            <Interests />
            <footer /> */}
    </div>
  );
}

export default App;
