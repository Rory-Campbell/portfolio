import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Home from './Home.js';
import NavBar from './NavBar.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Indie Flower',
      'cursive',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <NavBar/>
      <section id="portfolio-header">
        <Switch>
            <Route 
            exact path="/portfolio"
            render={() => <Home/>}
            />
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
        </section>
        <section id="projects">
          <Projects/>
        </section>

        <section id="contact">
          <Contact/>
        </section>

      
      
      
    </div>
    </ThemeProvider>
  );
}

export default App;
