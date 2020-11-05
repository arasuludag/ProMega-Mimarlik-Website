import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import PersonDialog from './PersonDialog.jsx';

import parse from 'html-react-parser';

export default function MediaCard(props) {
  return (
    <Grid item xs={10} sm={5} lg={3}>
      <Paper elevation={3} className="PersonCard">
        <div style={{ width: "90%", margin: "0 auto", height: "450px" }}>
          <img src={props.image} alt={props.name} className="Avatar" />
          <h3>{props.name}</h3>
          <p style={{color: "grey"}}>{props.job}</p>
          <p>{parse(props.text.substring(0,220))}...</p>

        </div>
        <div >
        <PersonDialog
          name={props.name}
          text={props.text}/>
      </div>
      </Paper>
    </Grid>
  );
}
