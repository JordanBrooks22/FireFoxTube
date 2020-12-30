import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <h1>Hello Clever Programmer, lets build a Youtube Clone</h1>
    
    <Header  />
   <div className="app__page">

   <Sidebar  />
   <RecommendedVideos  />


   </div>
    
    
    </div>
  );
}

export default App;
