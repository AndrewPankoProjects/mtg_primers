import { Outlet, Link } from "react-router-dom";
// import './Navbar.css';
import React, { useState } from 'react';

const Layout = () => {
    const [clicked, setClicked] = useState()

    const clickHandler = () => {
        if (!clicked){
            setClicked(true);
        }else{
            setClicked(false);
        }
    }
    return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">MTG Primers</h1>
        <div className="menu-icon" onClick={clickHandler}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className = {clicked ? 'nav-menu active' : 'nav-menu' }>
          <li>
            <Link className="nav-links" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-links" to="/Burn">Burn</Link>
          </li>
          <li>
            <Link className="nav-links" to="/ZooDomain">Zoo Domain</Link>
          </li>
          <li>
            <Link className="nav-links" to="/MonoRProwess">Mono R Prowess</Link>
          </li>
          <li>
            <Link className="nav-links" to="/UTron">U Tron</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;