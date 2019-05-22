import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider as Themer } from '@material-ui/core/styles';
import store from 'store';
import theme from 'theme';

export default function AppWrapper(props) {
  // prettier-ignore
  return (
    <Provider store={store}>
      <Router>
        <Themer theme={theme}>
          { props.children }
        </Themer>
      </Router>
    </Provider>
  )
}
