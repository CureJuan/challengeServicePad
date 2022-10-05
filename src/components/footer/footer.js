import React from "react";
import { Facebook } from "../../assets/img/facebook";
import { Youtube } from "../../assets/img/youtube";
import { Twitter } from "../../assets/img/twitter";
import { Pinterest } from "../../assets/img/pinterest";
import { Instagram } from "../../assets/img/instagram";
import { LogoFooter } from "../../assets/img/logofooter";
import "./footer.css"

const Footer = () => {
    return(
      <div className="footer">
        
        <div className="footer-logos">
        
         <div className="footer-align">
          <div>         
        <LogoFooter/>
        <div className="iconos">
         <Facebook/>
         <Youtube/>
         <Twitter/>
         <Pinterest/>
         <Instagram/>
         </div>
         </div>  
         <div>
          <p>About Us</p>
          <p>Contanct</p>
          <p>Blog</p>
          </div>
          <div>
          <p>Careers</p>
          <p>Support</p>
          <p>Privacy Policy</p>
         </div> 
         <div className="logo2">
         <button className="logo">Request invite</button>
         <p>© Easybank. All Rights Reserved</p>
         </div>
      </div>
      </div>
      </div>  
    )
    
}
export default Footer;