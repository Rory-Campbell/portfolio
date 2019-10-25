import React, {Component} from 'react';
import {Route, Switch, NavLink} from "react-router-dom";
import './NavBar.css';

class NavBar extends Component{ 
    render(){
        return( 
            <div className="navigation">
                
                        <nav className="navbar navbar-expand-lg navbar-light navigation-sub">
                        
                                <NavLink to="/" className="navbar-brand">RJC Development</NavLink>
                                <button
                                    class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav nav-fill w-100">
                                    <li class="nav-item">
                                        <NavLink to="/" className="item nav-link">Home</NavLink>
                                    </li>
                                   
                                    <li class="nav-item">
                                        <NavLink to="/projects" className="item nav-link">Projects</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink to="/contact" className="item nav-link">Contact</NavLink>
                                    </li>
                                    
                                </ul> 
                           </div>
                            
                            
                        </nav>  
                    </div>
          
        )
    }
}

export default NavBar;