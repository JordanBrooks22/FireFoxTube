import React from "react";
import Header from "./Header";
import './App.css';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <h1>Hello Clever Programmer, lets build a Youtube Clone</h1>
    
    <Header />
    {/* header -> <Header /> */}
    {/* header -> <Sidebar /> */}
    {/* header -> <Recomended Videos /> */}
    
    
    
    </div>
  );
}

export default App;
