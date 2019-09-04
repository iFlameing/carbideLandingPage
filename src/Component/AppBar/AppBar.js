import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "@reach/router";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  btn: {
    marginLeft: "auto",
    marginRight: 30
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.btn}>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/about">
              <Button color="inherit">About</Button>
            </Link>
            <a href="#contact">
              <Button color="inherit">Contact</Button>
            </a>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
