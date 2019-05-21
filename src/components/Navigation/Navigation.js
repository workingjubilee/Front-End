import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
import ArrowIcon from '@material-ui/icons/CompareArrows';
import DiaryIcon from '@material-ui/icons/QuestionAnswer';
import ScanIcon from '@material-ui/icons/CenterFocusStrong';
import { Link, NavLink } from 'react-router-dom';

import { mobile, tablet } from 'scss/mediaVariables';

const Toolbar = withStyles({
  root: {
    height: '60px'
  },
  regular: {
    minHeight: '60px',
    [`${tablet}`]: {
      minHeight: '60px'
    }
  },
  gutters: {
    padding: '0 16px 0 16px'
  }
})(props => <MuiToolbar {...props} />);

Toolbar.muiName = 'Toolbar';

const styles = theme => ({
  // To make styling easier, the bar turns red when the mobile breakpoint is hit:
  media: {
    [mobile]: {
      background: 'red'
    }
  },
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
    display: 'flex',
    '@media (max-width: 450px)': {
      display: 'none'
    }
  },
  sectionMobile: {
    display: 'none',
    '@media (max-width: 450px)': {
      display: 'flex'
    }
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
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <Link className={classes.profile} to={`/reminders`}>
            Profile
          </Link>
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color='inherit'>
            <Badge badgeContent={11} color='secondary'>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color='inherit'>
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <>
        <div className={classes.root}>
          <AppBar className={classes.media} position='static'>
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
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <div className='rightNav'>
                  <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup='true'
                    onClick={this.handleProfileMenuOpen}
                    color='inherit'
                  >
                    {/* <AccountCircle /> */}
                    <ProfileIcon />
                  </IconButton>
                </div>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-haspopup='true'
                  onClick={this.handleMobileMenuOpen}
                  color='inherit'
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMenu}
          {renderMobileMenu}
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
