import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 250,
    height: 250
  }
});

export default function ImageAvatars({ theImage }) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar
        alt="Ashutosh Burde"
        src={theImage}
        className={classes.bigAvatar}
      />
    </Grid>
  );
}
