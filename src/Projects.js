import React, {Component} from 'react';
import ProjectCard from './ProjectCard';
import LinkButton from './LinkButton';
import './Projects.css';

class Projects extends Component{
    render(){
        return(
            <div>
            
                <div className="container">

                <div className="projectsTitle">
                <h1>Projects</h1>
                </div>
            <div className="row">
                <div className="col-sm projectOne">

                
                <ProjectCard 
                cardTitle={"Class Planner App"}
                cardText={"I built a app to help me plan my group exercise classes"}
                cardSkills={
                    <div>
                        <li>HTML</li>
                        <li>CSS: Grid/flexbox</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>BootStrap</li>
                    </div>}
                    cardButton={
                    <LinkButton
                        buttonHref={"https://github.com/Rory-Campbell/class-planner"}
                        className={'btn btn-lg btn-primary'}
                        buttonText={"View Git-Hub"}
                />
                }/>
                </div>
                


            <div className=" col-sm projectTwo">
                <ProjectCard 
                    cardTitle={"Deer Jess Art"}
                    cardText={"I help maintain and update a local gold coast artists website"}
                    cardSkills={
                        <div>
                            <li>HTML</li>
                            <li>CSS: Grid/flexbox</li>
                            <li>JavaScript</li>
                            <li>Jquery</li>
                        </div>}
                        cardButton={
                            <LinkButton
                                buttonHref={"https://deerjessart.bigcartel.com/products"}
                                className={'btn btn-lg btn-primary'}
                                buttonText={"View Page"}
                />
                }/>
                </div>

                <div className=" col-sm projectThree">
                <ProjectCard 
                    cardTitle={"Story Of Rory"}
                    cardText={"I built a reactive comic strip using css grid, flexbox and media queries"}
                    cardSkills={
                        <div>
                            <li>HTML</li>
                            <li>CSS: Grid/flexbox</li>
                            <li>Media Queries</li>
                        </div>}
                        cardButton={
                            <LinkButton
                                buttonHref={"https://github.com/Rory-Campbell/class-planner"}
                                className={'btn btn-lg btn-primary'}
                                buttonText={"View Git-Hub"}
                />
                }/>
                </div>
            </div>
            </div>
            </div>
        )
    }

}

export default Projects;