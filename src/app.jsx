import './App.css'
import Photo from "./components/Photo"

function App() {
  return (<> <Photo/> </>)
  
}

export default App
      
/*
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";  // Importing Home component
import About from "./About"; // Importing About component

function App() {
  return (
    <Router>
      <Switch>
   

        
        /*      
        <Route exact path="/" component={Home} />

        {/* Route for the About page */}  /*      
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;