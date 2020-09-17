import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../css/Links.css";

import { Link, withRouter, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  links: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 60,
    paddingBottom: 35,
    // backgroundColor: "#52616b",
  },
}));

function Footer(props) {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <Link style={{ color: "#1e2022" }} to={"https://github.com/idea456"}>
          <GitHubIcon
            className="styledIcon"
            style={{ fontSize: "3.5vw", marginRight: 20, paddingTop: 2 }}
          />
        </Link>
        <Link
          style={{ color: "#0072b1" }}
          to={"www.linkedin.com/in/adrienne-rio"}
        >
          <LinkedInIcon className="styledIcon" style={{ fontSize: "4vw" }} />
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Footer);
