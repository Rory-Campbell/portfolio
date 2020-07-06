import React, {Component} from 'react';
import './Home.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AnchorLink from 'react-anchor-link-smooth-scroll';







class Home extends Component{
    render(){
        return(
            <div>
                <Container
                justifyItems="center">
                    <Grid
                    spacing={2}
                    justify="center" 
                    alignItems="center" 
                    container>
                        <Grid
                        item
                        xs={4}>
                            
                        </Grid>
                        
                        <Grid
                        item
                        xs={4}
                        >
                            <div className="title">
                            
                                <Typography
                                    variant="h2">
                                    Hi I'm Rory
                                </Typography>
                            </div>  
                        </Grid>
                        
                        <Grid
                        item
                        xs={4}>
                            
                        </Grid>
                       
                        <Grid
                        item
                        xs={12}>
                            <Typography
                            variant="h6">
                               <p> I am a front end focused developer based on the Gold Coast.<br></br>
                               I enjoy bringing projects to life on the internet
                               </p> 
                            </Typography>
                            
                        </Grid>
                        <Grid item xs={12}>
                            <Grid 
                                container
                                direction="column"
                                spacing={2}>
                                    <Grid item>
                                        <AnchorLink href="#projects">
                                        <Button variant="contained"
                                        className="Button"
                                        >
                                        Check Out My Work
                                        </Button>
                                        </AnchorLink>
                                    </Grid> 
                                    <Grid item>
                                     <EmailIcon fontSize='medium'/>  
                                     <PhoneIphoneIcon fontSize='medium'/> 
                                     <LinkedInIcon fontSize='medium'/>
                                    </Grid> 
                            </Grid>

                        </Grid>
                       
                    </Grid>
                </Container>
            </div>
         )
    }
}

export default Home;