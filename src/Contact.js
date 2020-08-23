import React, {Component} from 'react';
import './Contact.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Container from '@material-ui/core/Container';

class Contact extends Component{
    render(){
        return(
            <Container className="contact">
            <Grid 
            alignContent="space-around" container>
                <Grid item xs={12} className='contact-header'>
                    <Typography variant='h2' className='contact-title'>
                        Get In Touch

                    </Typography>
                    <Typography variant='h5'>
                        If you like my work and have a project you need help bringing to life, reach out to me!
                    </Typography>
                </Grid>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>
                    <a href = "mailto: rorycampbell345@gmail.com">
                        <EmailIcon fontSize='large'/>
                            <Typography variant="h6">
                                EMAIL
                            </Typography>
                    </a>
                </Grid>
            
                <Grid item xs={3}>
                    <a target="_blank" href="http://www.linkedin.com/in/rory-campbell-aa74a61b5">
                        <LinkedInIcon fontSize='large'/>
                            <Typography variant="h6">
                                LINKEDIN
                            </Typography>
                    </a> 
                </Grid>
            </Grid>
            </Container>
            
                                
                            
                            
                                


                            
                
        )
    }

}

export default Contact; 