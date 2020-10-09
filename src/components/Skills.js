import React from "react";

export default function Skills(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.skills.map((skill) => (
        <h2 style={{ marginTop: 5, color: "#8d93ab" }}>{skill}</h2>
      ))}
    </div>
  );
}
