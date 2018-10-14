import React, { Component} from 'react';
import './LandingPage.css';
import logo from './ucharity_logo.png';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';



class Results extends Component {
  render() {
    return (
    	<div>
    		<header>
          <h1 className="titles">Enter Your Interests</h1>
          	<div style={{ background: '#ECECEC', padding: '30px' }}>
                  <Card title="Card title" bordered={false}>Card content</Card>
            </div>
          <div className="container">
          <Button color="primary">Link to Facebook</Button>
    </div>
    <div className="centerPage">
    <br />
    <br />
    <br />
    <Button color="primary"><Link to="">Connect</Link></Button>
    </div>
        </header>
       	 </div>
    	);
  }
}

export default Results;
