import React, { Component } from 'react';

export default class FacebookLogin extends Component {

  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  /**
   * Init FB object and check Facebook Login status
   */
  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  /**
   * Check login status
   */
  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  /**
   * Check login status and call login api is user is not logged in
   */
  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
      }
    }, );
  }

  /**
   * Handle login response
   */
  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user: userData
        };
        this.props.onLogin(true, result);
        AccessToken.getCurrentAccessToken().then((data) => {
          const { accessToken } = data
          initUser(accessToken)
        })
      });
    } else {
      this.props.onLogin(false);
    }
  }

  /*facebookGetLikes = response => {
    if (response.status === 'connected') {
      this.FB.api('/me/likes', userData => {
        let result = {}
      }
    }
  }
  */

 initUser(token) {
  fetch('https://graph.facebook.com/v2.5/me?fields=likes&access_token=' + token)
  .then((response) => response.json())
  .then((json) => {
    // Some user object has been set up somewhere, build that user here
    user.name = json.name
    user.id = json.id
    user.email = json.email    
    user.likes = json.likes 
    console.log(json.name.toString(), json.id.toString(), json.email.toString(), json.likes.toString());
  })
  .catch(() => {
    reject('ERROR GETTING DATA FROM FACEBOOK')
  })
}
 




  render() {
    let {children} = this.props;
    return (
      <div onClick={this.facebookLogin}>
        {children}
      </div>
    );
  }
}