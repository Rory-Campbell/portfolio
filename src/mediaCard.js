import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    
  },
  media: {
    height: 200
  },
  actionArea: {
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  content: {
    background: "#D3D3D3"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={props.view} className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Grid container>
            
                <Grid item xs={6}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}>
                            <Typography align='right'>Skills</Typography> 
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {props.skillOne}<br></br>
                                {props.skillTwo}<br></br>
                                {props.skillThree}<br></br>
                                {props.skillFour}<br></br>
                                {props.skillFive}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Grid>
                <Grid item xs={6}>
                    <Button href={props.view} positon='right' variant="contained" size="large" color="secondary">
                    View
                    </Button>
                </Grid>
            </Grid>
        
      </CardActions>
    </Card>
  );
}