import React, { Component } from 'react';
import './LandingPage.css';
import logo from './ucharity_logo.png';
import Button from '@material-ui/core/Button';


class LandingPage extends Component {
  render() {
    return (
    	<div>
    		<header className="App-header">
         	 <img src={logo} className="App-logo" alt="logo" />
          	<p>
           	 Connecting you with the charities that do the most good.
         	 </p>
         	    <Button color="primary" size="large">Get Started</Button>
        	</header>
       	 </div>
    	);
  }
}

export default LandingPage;
