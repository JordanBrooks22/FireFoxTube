import React from "react";
import Header from './Header';
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
     <Router>
       <Header />
       <Switch>
         <Route path="/search/:searchTerm">
           <Header />
           <h1>Search page</h1>
         </Route>
         <Route path="/">
           <Header />
           <div className="app__page">
           <Sidebar />
           <RecommendedVideos />
           </div>
           </Route>

       </Switch>


     </Router>
    

    
    
    </div>
  );
}

export default App;
