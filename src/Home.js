import React, {Component} from 'react';
import './Home.css';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import DevicesIcon from '@material-ui/icons/Devices';
import CodeIcon from '@material-ui/icons/Code';
import {Route, Switch, NavLink} from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div>
            <section className="top">
            <div className="container">
                <div className="jumbotron">
                    <div className="container">
                        <h1>Hello, I'm Rory 
                </h1>
                <hr></hr>
                <p className="lead">I'm a front-end focused developer on the Gold Coast</p>
                    <NavLink to="/projects" className="btn btn-lg">View My Work</NavLink>
                    
                    </div>
                </div>
            </div>
            </section>
            
            <section className="bottom">
                <div className="container can-do">
                    <div className="row">
                        <div className="col-sm">
                            
                            <div className="container display-text">
                                <h2>What I Can Do</h2>
                                <EmojiObjectsIcon id="idea-icon"/>
                                <p>
                               Using the latest technologies and frameworks, I can turn your ideas into real life web applications.

                                </p>
                            </div> 

                            <div className="container display-text">
                            <DevicesIcon id="idea-icon"/>
                                <p>
                                  I can build responsive web sites and apps that look and function awesome on any device

                                </p>
                            </div>     
                                    
                                    
                                
                            
                        </div>
                    <div className="col-sm empty">
                    
                    </div>
                    </div>
                </div>
                <div className="container skills">
                    <div className="row">
                        <div className="col-sm empty">

                        </div>
                        <div className="col-sm">
                            <div className="container display-text">
                            <h2>Skills</h2>
                            <ul> 
                                <CodeIcon/>
                                <li>
                                    HTML
                                </li>
                                <CodeIcon/>
                                <li>
                                     CSS
                                </li>
                                <CodeIcon/>
                                <li>
                                     JavaScript
                                </li>
                                <CodeIcon/>
                                <li>
                                     React
                                </li>

                            </ul>                    
                        </div>
                        </div>
                        
                    </div>    
                </div>


            </section>
            </div>
         )
    }
}

export default Home;