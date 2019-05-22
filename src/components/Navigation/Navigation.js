import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiTypography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import ArrowIcon from '@material-ui/icons/CompareArrows';
import DiaryIcon from '@material-ui/icons/QuestionAnswer';
import ScanIcon from '@material-ui/icons/CenterFocusStrong';
import MuiSvgIcon from '@material-ui/core/SvgIcon';
import { Link, NavLink } from 'react-router-dom';

import { mobile, tablet } from 'scss/mediaVariables';

const SvgIcon = withStyles({
  root: {
    color: 'black'
  }
})(props => <MuiSvgIcon {...props} />);

SvgIcon.muiName = 'SvgIcon';

const Typography = withStyles({
  root: {
    [mobile]: {
      fontSize: '12px'
    }
  }
})(props => <MuiTypography {...props} />);

Typography.muiName = 'Typography';

const Toolbar = withStyles({
  root: {
    height: '60px',
    justifyContent: 'space-between'
  },
  regular: {
    minHeight: '60px',
    [`${tablet}`]: {
      minHeight: '60px'
    }
  },
  gutters: {
    padding: '0 10px 0 10px'
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
    width: '100%'
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
    '@media (max-width: 350px)': {
      display: 'none'
    }
  },
  strong: {
    fontSize: '2.5rem'
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
  },
  greyStripe: {
    background: '#F0F3F5',
    height: '15px'
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
      <div
        style={{ display: this.props.location.pathname === '/' ? 'none' : '' }}
      >
        <div className={classes.root}>
          <AppBar position='static'>
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
            <SvgIcon>
              <path d='M4.22,11.29L11.29,4.22C13.64,1.88 17.43,1.88 19.78,4.22C22.12,6.56 22.12,10.36 19.78,12.71L12.71,19.78C10.36,22.12 6.56,22.12 4.22,19.78C1.88,17.43 1.88,13.64 4.22,11.29M5.64,12.71C4.59,13.75 4.24,15.24 4.6,16.57L10.59,10.59L14.83,14.83L18.36,11.29C19.93,9.73 19.93,7.2 18.36,5.64C16.8,4.07 14.27,4.07 12.71,5.64L5.64,12.71Z' />
            </SvgIcon>
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
        <div className={classes.greyStripe} />
      </div>
    );
  }
}

const StyledNavigation = withStyles(styles)(withRouter(Navigation));

export default StyledNavigation;
