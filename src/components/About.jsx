import React from "react";


import Grid from "@material-ui/core/Grid";

function About() {
  return (
    <div className="Squeezer About">
      <Grid className=""
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={4} lg={5}>
        <h1 style={{fontWeight: "300" }}>HAKKIMIZDA </h1>
        <p>1990 yılında Karabulut İnşaat Mimarlık adıyla hizmet vermeye başlamış ofis 2007 yılından
itibaren Promega Mimarlık Mühendislik ofisi olarak hizmet vermeye devam etmektedir.
Özgün tasarımlar, yerel mimariye saygı anlayışları çerçevesinde ofis, ürünler vermektedir.
Sürekli araştıran, sürekli kendini geliştiren, dünya mimarisini takip eden ekip birçok alanda
proje ve uygulama çalışmaları yapmıştır.</p>
        </Grid>
        <Grid item xs={12} sm={8} lg={7}>
        <img style = {{borderRadius: "0"}} className="AboutPhoto" src="AboutPhoto1.jpg" alt="hakkimizda-ornek-resim" />
        </Grid>

</Grid>
    </div>
  );
}

export default About;
