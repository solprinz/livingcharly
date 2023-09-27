import React from "react";
import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import useMobile from "../../../hooks/useMobile"
import LogoWhite from "/full-white-vector.png";
import LogoMobile from "/logo-mobile-vector.png";
import Hamburger from "../../../assets/Hamburger.svg";


export const Navigation = () => {

    const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

    const isMobile = useMobile()

    return(
        <nav className="navbar">
          <div className="container-nav">
            <div className="nav-logo">
            {
                isMobile ? 
                <Link to="/">
                    <img src={LogoMobile} loading="lazy" alt="Logo Living Charly"/>
                </Link>

                :  <Link to="/"><img src={LogoWhite} alt="Logo Living Charly"  width={172} height={64}/></Link>
            }
              
            </div>
            <div className="nav-links">
             
                <div className="nav-catalogo">
                    <NavLink to="/catalogo">Catálogo</NavLink>
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li><NavLink to="/preguntas-frecuentes" onClick={handleShowNavbar}>Preguntas frecuentes</NavLink></li>
                        <li><NavLink to="/nosotros" onClick={handleShowNavbar}>Sobre nosotros</NavLink></li>
                        <li><NavLink to="/contacto" onClick={handleShowNavbar}>Contacto</NavLink></li>
                    </ul>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                <img src={Hamburger} loading="lazy" width="30" height="30" alt="Hamburger"/>
                </div>
                
            </div>
            </div>
        </nav>
    )
}



