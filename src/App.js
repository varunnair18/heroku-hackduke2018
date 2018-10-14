import React, { Component } from 'react';
import './App.css';
import Fbutton from './fbutton.js';
import Charity from './charity.js';

class App extends Component {
	constructor(){
		super();
	}
	render() {
		return(
			<div>
			<Fbutton/>
			<Charity/>
			</div>
		);
	}
}
export default App;