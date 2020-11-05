import React from "react";


import Grid from "@material-ui/core/Grid";

import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

function Hero() {
  return (
    <div className="Hero">
      <Grid className="HeroGrid"
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} lg={4}>
        <h1 style={{fontWeight: "300", color:"white" }}>Mimarlık - Mühendislik </h1>
        <h1 style={{fontWeight: "600", color:"white" }}>& İç Mimarlık </h1>
        </Grid>

        <Grid item xs={12} sm={1} lg={2}>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
            <a style={{color: "white", textAlign: "right"}} href="https://www.facebook.com/promegamimarlik"><FacebookIcon /></a>
            </Grid>
            <Grid item>
            <a style={{color: "white"}} href="https://www.youtube.com/channel/UCGsVTO-eYGpxqU4VjACuwaA"><YouTubeIcon /></a>
            </Grid>
            <Grid item>
            <a style={{color: "white"}} href="https://www.instagram.com/promegamimarlik/"><InstagramIcon /></a>
            </Grid>
          </Grid>
        </Grid>

</Grid>
    </div>
  );
}

export default Hero;
