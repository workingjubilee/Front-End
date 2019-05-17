import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import { Link, NavLink } from 'react-router-dom';

import { mobile } from 'scss/mediaVariables';

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
          <Link className={classes.profile} to={`/dashboard`}>
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
              <Typography
                className={classes.title}
                variant='h6'
                color='inherit'
                noWrap
              >
                <Link to='/' className='title'>
                  <span>RxID</span> Pill Identifier
                </Link>
              </Typography>
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
          <NavLink to='/scan' className='tab' activeClassName='active-tab'>
            <Typography component='h5'>Scan / Add Pill</Typography>
          </NavLink>
          <NavLink to='/pills' className='tab' activeClassName='active-tab'>
            <Typography component='h5'>Pill List</Typography>
          </NavLink>
          <NavLink to='/dashboard' className='tab' activeClassName='active-tab'>
            <Typography component='h5'>Scheduled Pills</Typography>
          </NavLink>
          <NavLink to='/diary' className='tab' activeClassName='active-tab'>
            <Typography component='h5'>Diary</Typography>
          </NavLink>
        </nav>
      </>
    );
  }
}

const styles = theme => ({
  // To make styling easier, the bar turns red when the mobile breakpoint is hit:
  media: {
    [`${mobile}`]: {
      background: 'red'
    }
  },
  root: {
    width: '100%',
    [`${mobile}`]: {
      background: 'red'
    }
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
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
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
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

const StyledNavigation = withStyles(styles)(Navigation);

export default StyledNavigation;
