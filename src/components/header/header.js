import React from "react";
import { Logo } from "../../assets/img/logo";
import "./header.css"

const Header  = () => {
    return(
        <div className="header-contains">
         <div className="header">
         <Logo/>
         <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
         </ul>
         <button>Request invite</button>
      </div>
        </div>
    )
}
export default Header;