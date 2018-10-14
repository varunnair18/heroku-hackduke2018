import React, { Component} from 'react';
import './LandingPage.css';
import logo from './ucharity_logo.png';
import peace from './peaceplayers.png';
import paws from './paws.png';
import cancer from './cancer.png';
import fisher from './fishercenter.png';
import scholarship from './scholarship.png';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class Results extends Component {
  render() {
    return (
    	<div className="centerPage">
    		<header className="Results-header">
          <h1 className="titles">Your Matches</h1>
          	    <Card className="Card-margin">
                  <CardActionArea>
                   <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={peace}
                      title="Peace Players International"
                    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
              Peace Players International
          </Typography>
          <Typography component="p">
            Bridging divides, developing leaders, changing perceptions
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary"><Link to="https://www.classy.org/campaign/peaceplayers/c195722">
          Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>

    <Card className="Card-margin">
                  <CardActionArea>
                   <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={scholarship}
                      title="Children's Scholarship Fund Philadelphia"
                    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Childrens Scholarship Fund Philadelphia
          </Typography>
          <Typography component="p">
            Hope, Opportunity, Success
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className="Card-margin">
                  <CardActionArea>
                   <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={cancer}
                      title="Pediatric Cancer"
                    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Pediatric Cancer
          </Typography>
          <Typography component="p">
            Rise Up for a Faster Cure
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className="Card-margin">
                  <CardActionArea>
                   <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={fisher}
                      title="Fisher Center"
                    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Fisher Center
          </Typography>
          <Typography component="p">
            Dedicated to funding research into the cause, care and cure of Alzheimer's disease
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>

    <Card className="Card-margin">
                  <CardActionArea>
                   <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={paws}
                      title="Paws"
                    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            PAWS
          </Typography>
          <Typography component="p">
            Pets are worth saving
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
          <div className="container">
    <br />
          <Button color="primary"><Link to="/results" style={{ textDecoration: 'none', color: '#ffffff', marginBottom: '25px' }}>Search Again</Link></Button>
    </div>
    <div className="centerPage">
    </div>
        </header>
       	 </div>
    	);
  }
}

export default Results;
