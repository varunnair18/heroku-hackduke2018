import React, { Component } from 'react';
import logo from './ucharity_logo.png';
import './App.css';
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Main from './main'
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fbutton from './fbutton.js';
import Charity from './charity.js';

const theme = createMuiTheme({
	palette: {
	  primary: { main: '#5D8FAD' }, // Purple and green play nicely together.
	  secondary: { main: '#ffffff' }, // This is just green.A700 as hex.
	},
  });

class App extends Component {
	constructor(){
		super();
	}
	render() {
		return(
			<div>
			<MuiThemeProvider theme={theme}>
        		<NavBar />
        		<Main />
        		</MuiThemeProvider>
			{/* <Fbutton/> */}
			<Charity/>
			</div>
		);
	}
}
export default App;