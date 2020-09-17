import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "../css/Links.css";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "transparent",
    boxShadow: "none",
  },
  toolbar: {
    justifyContent: "flex-end",
    marginRight: 20,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const state = {
    labels: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Projects", link: "/projects" },
      { name: "Blog", link: "/blog" },
    ],
  };

  return (
    <AppBar color="transparent" position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {state.labels.map((label) => {
          return (
            <NavLink
              exact
              className="styledLink"
              style={{ height: 80, marginRight: 40, paddingTop: 20 }}
              activeStyle={{ color: "#faed27" }}
              to={label.link}
            >
              <h1 style={{ fontSize: "1.7vw" }}>{label.name}</h1>
            </NavLink>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
