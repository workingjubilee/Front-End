// The simplest of simple almost integrations of Auth0
require('dotenv').config();

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'rxid.auth0.com',
    clientID: process.env.AUTH0_CLIENT_ID,
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
