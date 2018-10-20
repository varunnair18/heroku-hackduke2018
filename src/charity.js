import React, { Component } from 'react';
import './App.css';

const API = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=13c66db4&app_key=443d1b17b656804edeef8d1dbdd40b67';
const rated = '&rated=true';
const pageSize = '&pageSize=1';
const sort = '&sort=RATING%3ADESC';

const donorPrivacy = '&donorPrivacy=';
const stat = '&state=';
const searchy = '&search=';

const search = ['Basketball','Education', 'Cancer','Alzheimers', 'Dogs',];

class Charity extends Component {
    
  constructor(props) {
    super(props);

      this.state = {
	  
	  donorPriv : '1',
	  stat : '',
	  url: [],
	  name: [],
	  tagLine:[],
	  mission:[],
	  inputValue: ''
      };
  }
  	// fetchy() {
	// 	var ur = API+rated+sort+pageSize
	//     +donorPrivacy+this.state.donorPriv
	//     +stat+this.state.stat
	// 	fetch(ur+searchy+this.state.inputValue)
	// 	.then(response => response.json())
	// 	.then(response => response[0]) 
	// 	.then(data => this.setState({
	// 		url: this.state.url.concat([data.websiteURL]),
	// 		name: this.state.name.concat([data.charityName]),
	// 		tagLine: this.state.tagLine.concat([data.tagLine]),
	// 		mission: this.state.mission.concat([data.mission])}));
		
	// 	}
	  
    componentDidMount() {
	
	// {/*
	//    must have set donorPriv and stat at this point 
	//  */}
	
	var ur = API+rated+sort+pageSize
	    +donorPrivacy+this.state.donorPriv
	    +stat+this.state.stat
	
	for (var i = 0; i < search.length; i++) {
	    
	    fetch(ur + searchy +search[i])
		.then(response => response.json())
		.then(response => response[0]) 
		.then(data => this.setState({
		    url: this.state.url.concat([data.websiteURL]),
		    name: this.state.name.concat([data.charityName]),
		    tagLine: this.state.tagLine.concat([data.tagLine]),
		    mission: this.state.mission.concat([data.mission])}));

	}

	
	
	// fetch(ur+searchy+this.state.inputValue)
	// .then(response => response.json())
	// .then(response => response[0]) 
	// .then(data => this.setState({
	// 	url: this.state.url.concat([data.websiteURL]),
	// 	name: this.state.name.concat([data.charityName]),
	// 	tagLine: this.state.tagLine.concat([data.tagLine]),
	// 	mission: this.state.mission.concat([data.mission])}));
	// this.fetchy()
	}
      render() {
	  
	  var lis = [];

	  for (var i = 0; i < search.length; i++) {
	      lis.push(
		  		  <div>
	      <h1> {this.state.name[i]} </h1>
	      <h1> <a href={this.state.url[i]}> Website </a> </h1>
	      <h1> {this.state.tagLine[i]} </h1> <br/>
		      </div>
		  )
	  }
	  
	  //return (lis);
	  return(null);

	
	// return(
	// <input value={this.state.inputValue} onChange = {evt => this.updateInputValue(evt)}/>
	// )
// 	return (
// 		<div>
// {this.state.inputValue}
// 			<input value={this.state.inputValue} onChange = {evt => this.updateInputValue(evt)}/>

// 			</div>
// 	)

  }
  updateInputValue(evt) {
	  console.log(evt.target.value)
	  
    this.setState({
      inputValue: evt.target.value
	});
	// this.fetchy()
  }
}

export default Charity;
