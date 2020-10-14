import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {Button} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Home from './Components/Home/home';
import Dashboard from "./Components/Dashboard/Dashboard" ;
import PendingRequisitions from "./Components/Pending Requisitions/PendingRequisitions";
import ViewOrder from "./Components/View Order/ViewOrder";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {/*<Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>*/}
          <Link to={'/Dashboard'}>
          <Button variant="contained" color="primary" style={{height : "50px"}}>DashBoard</Button>
          </Link>
          <Button variant="contained" color="primary" style={{height : "50px"}}>Settings</Button>
          <Button variant="contained" color="primary" style={{height : "50px"}}>Vendors</Button>
          <Button variant="contained" color="primary" style={{height : "50px"}}>Reports</Button>
          <Button variant="contained" color="primary" style={{height : "50px" , position : 'absolute', float : 'right' , right : '30px'}}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        

            {/* ******************Add Covered list for side menu********************** */}
        <Link to={"/Dashboard"}>
        <List>
            <ListItem  >
              <ListItemText primary={"Dashboard"}  />

            </ListItem>
        </List>
      </Link>
            {/* ****************************************************************************** */}

        <Divider />

        <Link to={"/"}>
          <List>
            <ListItem  >
              <ListItemText primary={"Input Vendor Quotations"}  />

            </ListItem>
          </List>
        </Link>
        <Divider/>
        <Link to={"/"}>
          <List>
            <ListItem  >
              <ListItemText primary={"Vendor Registration"}  />

            </ListItem>
          </List>
        </Link>
        <Divider/>

        <Link to={"/"}>
          <List>
            <ListItem  >
              <ListItemText primary={"Vendor Report"}  />

            </ListItem>
          </List>
        </Link>
        <Divider/>

        <Link to={"/"}>
          <List>
            <ListItem  >
              <ListItemText primary={"Management Committee"}  />

            </ListItem>
          </List>
        </Link>
        <Divider/>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
          <Switch>
            {/*<Route exact path='/' component={Home} />*/}
            <Route exact path='/Dashboard' component={Dashboard} />
            <Route exact path='/PendingRequisitions' component={PendingRequisitions} />
            <Route exact path='/ViewOrder' component={ViewOrder} />
            <Route exact path='/Home' component={Home} />
          </Switch>
        
      </main>
    </div>
    </Router>
  );
}
