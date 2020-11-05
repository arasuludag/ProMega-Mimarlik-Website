import React from "react";

import Grid from "@material-ui/core/Grid";

import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="Squeezer">
      <h1 className="ContactText">
        <QuestionAnswerIcon /> İletişim
      </h1>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={10} sm={5} lg={3}>
          <p className="ContactText">
            <Button
              variant="outline-dark"
              href="mailto:bilgi@promegamimarlik.com"
            >
              <EmailIcon /> bilgi@promegamimarlik.com
            </Button>
            <br />
          </p>
          <p className="ContactText">
            <PhoneIcon /> (0362) 435 92 29 <br />
            <br />
          </p>
        </Grid>
        <Grid item xs={10} sm={6} lg={3}>
          <p className="ContactText">
            <LocationCityIcon /> Kale Mah. Bankalar Cad. Kuzeyhan No: 39 Kat: 3
            İlkadım / Samsun
          </p>
        </Grid>
        <Grid item xs={10} sm={1} lg={1}>
          <Grid item container direction="column" spacing={2}>
            <Grid item>
            <a style={{color: "black", textAlign: "right"}} href="https://www.facebook.com/promegamimarlik"><FacebookIcon /></a>
            </Grid>
            <Grid item>
            <a style={{color: "black"}} href="https://www.youtube.com/channel/UCGsVTO-eYGpxqU4VjACuwaA"><YouTubeIcon /></a>
            </Grid>
            <Grid item>
            <a style={{color: "black"}} href="https://www.instagram.com/promegamimarlik/"><InstagramIcon /></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
