import React from "react";
import './header.scss';
import svgImage from './1633250.svg';
import hamburger from './Hamburger_icon.svg.png';

function Header(){


   return(
      <header className="header">
         <div className="header__block">
            <img src={hamburger} alt=""  width={50} height={50}/>
            <h1 className="header__title">Posters Galore</h1>
            <img src={svgImage} alt="" width={50} height={50}/>
         </div>
      </header>
   )
}

export default Header; 