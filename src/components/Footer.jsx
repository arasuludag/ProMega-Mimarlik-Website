import React from "react";

function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer style={{margin: "50px auto"}}>
      <div>
        <p style={{textAlign: "center"}}> © {yearNow} Copyright: ProMega Mimarlık - Mühendislik </p>
      </div>
    </footer>
  );
}
export default Footer;
