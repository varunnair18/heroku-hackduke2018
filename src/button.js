import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FacebookLoginButton from './FacebookLoginButton.js';

class button extends Component {
  constructor() {
    super();
    this.onFacebookLogin.bind(this);
  }

  state = {
    username: null
  };



  onFacebookLogin = (loginStatus, resultObject) => {
    console.log('in onFacebookLogin');
    if (loginStatus === true) {
      console.log('login Status is true')
      this.setState({
        username: resultObject.user.name
      });
    } else {
      //alert('Facebook login error');
      console.log("else");
    }
  }
  render() {
    const { username } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          { !username &&
            <div>
              <p>Click on one of any button below to login</p>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button> Facebook</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
      </div>
    );
  }
}

export default button;
