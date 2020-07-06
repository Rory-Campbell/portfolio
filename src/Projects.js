import React, {Component} from 'react';
import './Projects.css';
import dave from './Dave-site.png';
import camp from './Yelp-camp.png';
import story from './Rory-story.png';
import planner from './Class-planner.jpeg';
import jess from './Deer-jess.png';
import smile from './Smile.png';
import MediaCard from './mediaCard.js';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';



class Projects extends Component{
    render(){
        const xs = 12;
        const sm = 4; 
        return(
            
            <div className="project-container">
            <Container>
               <Grid container align ="center" spacing={2}>
                   <Grid item xs={12}>

                        <Typography className="project-title" variant="h2">
                        Projects
                        </Typography>
                    </Grid>
                    <Grid item justify="center" xs={xs} sm={sm}>
                        <MediaCard
                            image={smile}
                            title="Smile2U"
                            body="I Built A Members Login Section Using The MERN Stack"
                            view="https://pure-escarpment-76611.herokuapp.com/"
                            skillOne="React"
                            skillTwo="Node.js"
                            skillThree="MongoDB"
                            skillFour="Material UI"
                            skillFive="Express"
                            />
                    </Grid>

                <Grid item xs={xs} sm={sm}>
                    <MediaCard
                        image={jess}
                        title="DEER Jess Art"
                        body="I Help Maintain A Website For A Local Gold Coast Artist"
                        view="https://deerjessart.bigcartel.com/cart"
                        skillOne="HTML"
                        skillTwo="CSS"
                        skillThree="Javascript"
                        skillFour="Jquery"
                        skillFive="Big Cartel"
                    />
                </Grid>
                


                <Grid item xs={xs} sm={sm}>
                    <MediaCard
                        image={planner}
                        title="Class Planner App"
                        body="I Built A Class Planner App To Help Me Plan Exercise Classes"
                        view="https://rory-campbell.github.io/class-planner/"
                        skillOne="React"
                        skillTwo="JavaScript"
                        skillThree="HTML"
                        skillFour="CSS"
                        skillFive="Boot Strap"
                    />
                </Grid>

                <Grid item xs={xs} sm={sm}>
                    <MediaCard
                        image={story}
                        title="Story Of Rory"
                        body="I Built A Dynamic Comic Strip Using CSS Grid and Flexbox"
                        view="https://rory-campbell.github.io/rory-story/"
                        skillOne="HTML"
                        skillTwo="CSS"
                        skillThree="Javascript"
                    />
                </Grid>
                <Grid item xs={xs} sm={sm}>
                    <MediaCard
                        image={dave}
                        title="D Priest Physio"
                        body="I Built A Business Website For My Friends Physio Business"
                        view="https://rory-campbell.github.io/D-Priest-Physio/"
                        skillOne="HTML"
                        skillTwo="CSS"
                        skillThree="Javascript"
                        skillFour="Jquery"
                        skillFive="Bootstrap"/>
                </Grid>
                <Grid item xs={xs} sm={sm}>
                    <MediaCard
                        image={camp}
                        title="YELP Camp"
                        body="I Built A Full Stack Campground Rating App Allowing User Login"
                        view="https://pacific-everglades-88365.herokuapp.com/"
                        skillOne="HTML"
                        skillTwo="CSS"
                        skillThree="Javascript"
                        skillFour="MongoDB"
                        skillFive="Node.js"/>
                </Grid>
                </Grid>
            </Container>  
        </div>
       
        )
    }

}

export default Projects;