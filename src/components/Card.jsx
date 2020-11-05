import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Dialog from './Dialog.jsx'

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
  },
  media: {
    height: 200,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  height: {
    height: 180,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={10} sm={6} lg={3}>
    <Card className={classes.root} key = {props.key}>
        <CardMedia
          className={classes.media}
          image={props.image[0]}
          title={props.title}
        />
      <CardContent className={classes.height}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Proje
        </Typography>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.location}
        </Typography>
      </CardContent>
      <CardActions>

        <Dialog
          title={props.title}
          text={props.location}
          image={props.image}
          key={props.key}/>
      </CardActions>
    </Card>
  </Grid>
  );
}
