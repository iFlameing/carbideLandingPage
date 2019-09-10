import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import Button from "@material-ui/core/Button";
import fly from '../../fly.png';

//import VisibleItemList from '../containers/VisibleItemList'
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  btn: {
    marginLeft:"auto",
    marginRight:30
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  done:{
    flexGrow: 1,
    fontSize: 24
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0
  }
}));
function ResponsiveDrawer() {
  const dummyCategories = [
    "Home",
    "About",
    "Blog",
    "Media",
    "Gallery",
    "Team",
    "Achievements",
    "Contact"
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Hidden only="xs">
          <Link style={{ textDecoration: 'none', color:'white' }} to="/">
              <Button color="inherit" className={classes.done}><i className="fa fa-home"></i></Button>
            </Link>
          <span className={classes.btn}>
            <Link style={{ textDecoration: 'none' ,color:'white' }} to="/about">
              <Button color="inherit">About</Button>
            </Link>
            <Link style={{ textDecoration: 'none',color:'white' }} to="/blog">
              <Button color="inherit">Blog</Button>
            </Link>
            <Link style={{ textDecoration: 'none',color:'white' }} to="/media">
              <Button color="inherit">Media</Button>
            </Link>
            <Link style={{ textDecoration: 'none',color:'white' }} to="/gallery">
              <Button color="inherit">Gallery</Button>
            </Link>
            <Link style={{ textDecoration: 'none',color:'white' }} to="/team">
              <Button color="inherit">Team</Button>
            </Link>
            <Link style={{ textDecoration: 'none',color:'white' }} to="/achievements">
              <Button color="inherit">Achievements</Button>
            </Link>
            <Link style={{ textDecoration: 'none',color:'white' }} to="/contact">
              <Button color="inherit">Contact</Button>
            </Link>

          </span>
          </Hidden>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

    </div>
  );
}
ResponsiveDrawer.propTypes = {
  container: PropTypes.object
};
export default ResponsiveDrawer;
