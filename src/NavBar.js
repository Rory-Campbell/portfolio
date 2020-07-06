import React, {Component} from 'react';
import './NavBar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


class NavBar extends Component{
    render(){
       return(
                
            <div className="navigation">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="#page-top">Rory Campbell</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#portfolio-header">About</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#projects" onClick="test('S1'); return false;">Projects</AnchorLink>
                            </li>
                            <li className="nav-item">
                                <AnchorLink className="nav-link" href="#contact">Contact </AnchorLink>
                            </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                
                        
            </div>
          
        )
    }
}


export default NavBar;