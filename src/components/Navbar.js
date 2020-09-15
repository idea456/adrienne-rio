import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "../css/Links.css";

import { Link } from "react-router-dom";

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
      { name: "About", link: "/about" },
      { name: "Projects", link: "/projects" },
      { name: "Contact", link: "/contact" },
    ],
  };

  return (
    <AppBar color="transparent" position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {state.labels.map((label) => {
          return (
            <Link
              className="styledLink"
              style={{ height: 80, marginRight: 40, paddingTop: 20 }}
              to={label.link}
            >
              <h1 style={{ fontSize: 25 }}>{label.name}</h1>
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
}
