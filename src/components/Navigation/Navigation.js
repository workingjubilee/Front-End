import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import MuiIconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import ArrowIcon from '@material-ui/icons/CompareArrows';
import DiaryIcon from '@material-ui/icons/QuestionAnswer';
import ScanIcon from '@material-ui/icons/CenterFocusStrong';
import { Link, NavLink } from 'react-router-dom';

import { tablet } from 'scss/mediaVariables';

const Toolbar = withStyles({
  root: {
    height: '110px',
    justifyContent: 'space-between'
  },
  regular: {
    minHeight: '60px',
    [`${tablet}`]: {
      minHeight: '60px',
      height: '60px'
    }
  },
  gutters: {
    padding: '0 10px 0 40px'
  }
})(props => <MuiToolbar {...props} />);

Toolbar.muiName = 'Toolbar';

const IconButton = withStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
})(props => <MuiIconButton {...props} />);

IconButton.muiName = 'IconButton';

const styles = theme => ({
  root: {
    width: '100%',
    borderBottom: '1px solid #3b3b3c'
  },
  bar: {
    'box-shadow': 'none'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    marginRight: '10px',
    fontSize: '1.2rem',
    fontWeight: 'light',
    fontFamily: 'Roboto'
  },
  subTitle: {
    fontWeight: 300,
    '@media (max-width: 350px)': {
      display: 'none'
    }
  },
  strong: {
    fontSize: '2.5rem',
    fontWeight: 400
  },
  search: {
    display: 'flex',
    [tablet]: {
      display: 'none'
    },
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%'
  },
  searchIcon: {
    margin: '0 10px 0 10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: '40px',
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  sectionDesktop: {
    display: 'flex'
  },
  profile: {
    color: '#2c419b',
    'text-decoration': 'none',
    'font-weight': 'bold',
    '&:hover': {
      color: fade('#2c419b', 0.75)
    }
  }
});

class Navigation extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <AppBar position='static' className={classes.bar}>
            <Toolbar>
              <Link to='/' className='title'>
                <Typography
                  className={classes.title}
                  variant='h2'
                  color='inherit'
                  noWrap
                >
                  <strong className={classes.strong}>RxID</strong>
                  <span className={classes.subTitle}> Pill Identifier</span>
                </Typography>
              </Link>

              <div className='searchBar'>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <form>
                    <InputBase
                      name='searched'
                      placeholder='Search to identify your pill'
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                    />
                  </form>
                </div>
              </div>

              <div className={classes.sectionDesktop}>
                <ProfileIcon />
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <nav className='tab-navigator'>
          <NavLink to='/scan' className='tab edge' activeClassName='active-tab'>
            <ScanIcon className='scanner icon' />
            <Typography component='h5'>Scan / Add Pill</Typography>
          </NavLink>
          <NavLink to='/pills' className='tab' activeClassName='active-tab'>
            <Typography component='h5'>List of Medications</Typography>
          </NavLink>
          <NavLink to='/reminders' className='tab' activeClassName='active-tab'>
            <ArrowIcon className='arrow icon' />
            <Typography component='h5'>Scheduled Pills</Typography>
          </NavLink>
          <NavLink to='/diary' className='tab' activeClassName='active-tab'>
            <DiaryIcon className='diary-icon' />
            <Typography component='h5'>Medication Diary</Typography>
          </NavLink>
        </nav>
      </>
    );
  }
}

const StyledNavigation = withStyles(styles)(Navigation);

export default StyledNavigation;
