import { createMuiTheme } from '@material-ui/core/styles';

// PLACEHOLDER COLORS. We can change these at any time.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2d90f5'
    },
    secondary: {
      main: '#40ab47',
      contrastText: '#fff'
    },
    accent: {
      backgroundColor: '#ffa500',
      color: '#fff'
    }
  },
  typography: {
    fontFamily: ['Raleway', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    useNextVariants: true
  }
});

export default theme;
