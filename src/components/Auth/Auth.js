import auth0 from 'auth0-js';
require('dotenv').config()

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'rxid.auth0.com',
    // clientID: process.env.AUTH0_CLIENT_ID,
    clientID: '7ZygCOgK7Mrpz6pd7IlOX6cgmCxhawZu',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((error, authResults) => {
      if (authResults) {
        console.log('auth results: ', authResults);
      } else if (error) {
        console.log('error: ', error);
      }
      console.log('made it here');
    });
  }

  isAuthenticated() {}
}
