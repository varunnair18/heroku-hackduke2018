import React, { Component} from 'react';
import './LandingPage.css';
import logo from './ucharity_logo.png';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Fbutton from './../fbutton.js';
import FacebookLoginButton from './../FacebookLoginButton.js'



class Donate extends Component {
  render() {
    return (
    	<div>
    		<header className="titles">
          <h1 className="titles">Enter Your Interests</h1>
          	<p className="description">Fill in the boxes below with some of your interests, or link to Facebook for easy entry.</p>
          <div className="container">
          <Fbutton/>
            <TextField
              label="None"
              id="margin-normal"
              defaultValue="Basketball"
              className="textField"
            />
      <TextField
              label="None"
              id="margin-normal"
              defaultValue="Education"
              className="textField"
            />
      <TextField
              label="None"
              id="margin-normal"
              defaultValue="Cancer"
              className="textField"
            />
                  <TextField
              label="None"
              id="margin-normal"
              defaultValue="Alzheimers"
              className="textField"
            />
                  <TextField
              label="None"
              id="margin-normal"
              defaultValue="Dogs"
              className="textField"
            />
    </div>
    <div className="centerPage">
    <br />
    <br />
    <br />
    <Button color="primary"><Link to="/results" style={{ textDecoration: 'none', color: '#ffffff' }}>Connect</Link></Button>
    </div>
        </header>
       	 </div>
    	);
  }
}

export default Donate;
