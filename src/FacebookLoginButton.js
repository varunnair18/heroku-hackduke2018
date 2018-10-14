import React, { Component } from 'react';
import {AccessToken, GraphRequest, GraphRequestManager} from 'react-native-fbsdk';


export default class FacebookLogin extends Component {

  // initUser = (token, userData) => {
  //   fetch('https://graph.facebook.com/v2.5/me?fields=likes&access_token=' + token)
  //   .then((response) => response.json())
  //   .then((json) => {
  //     // Some user object has been set up somewhere, build that user here
  //     userData.name = json.name
  //     userData.id = json.id
  //     userData.email = json.email    
  //     userData.likes = json.likes 
  //     console.log(json.name.toString(), json.id.toString(), json.email.toString(), json.likes.toString());
  //   })
  //test
  // }
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

   //Create response callback.
  //  _responseInfoCallback(error: ?Object, result: ?Object) {
  //   if (error) {
  //     console.log('Error fetching data: ' + error.toString());
  //   } else {
  //     console.log('Success fetching data: ' + result.toString());
  //   }
  // }

  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user: userData
        };
        this.props.onLogin(true, result);
        // AccessToken.getCurrentAccessToken().then((data) => {
        //   const { accessToken } = data
        //   initUser(accessToken, userData)
        // })

        // Create a graph request asking for user information with a callback to handle the response.
        let req = new GraphRequest('/me', {
          httpMethod: 'GET',
          version: 'v2.5',
          parameters: {
              'fields': {
                  'string' : 'email,name,friends'
              }
          }
        });
        console.log(req.result)
      })
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
 

  render() {
    let {children} = this.props;
    return (
      <div onClick={this.facebookLogin}>
        {children}
      </div>
    );
  }
}