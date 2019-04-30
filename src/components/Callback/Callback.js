import React, {Component} from 'react';
import Auth from '../Auth/Auth';

const auth = new Auth();

export class Callback extends Component {
  componentDidMount = () => {
    auth.handleAuthentication()
    // data = await auth.handleAuthentication()
  };
  render() {
    return (
      <div>
        <p>loading..</p>
      </div>
    );
  }
}

export default Callback;
