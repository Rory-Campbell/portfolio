import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './Home.js';
import NavBar from './NavBar.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
            <Route 
              exact path="/"      
              render={() => <Home />} />
            <Route 
              exact path="/about"  
              render={() => <About />} />
            <Route 
              exact path="/projects"
              render={() => <Projects />} />
              <Route 
              exact path="/contact"
              render={() => <Contact />} />


          </Switch>
      
      
      
    </div>
  );
}

export default App;
