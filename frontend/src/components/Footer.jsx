import React from "react";

// footer for the copy year
function Footer() {
  
  const year = new Date().getFullYear();
  
  return (
    <footer> <p> Copyright ⓒ {year} </p> </footer>
  );
}

export default Footer;
