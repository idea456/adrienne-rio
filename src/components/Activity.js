import React from "react";
import Grid from "@material-ui/core/Grid";

export default function Activity(props) {
  const { title, date, description } = props;
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
      <h1>{title}</h1>
      <h2 style={{ color: "#8d93ab" }}>{date}</h2>
      <p style={{ fontSize: "1.4em", color: "#40424b", textAlign: "justify" }}>
        {description}
      </p>
    </Grid>
  );
}
