import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useState } from "react";


const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
               

<header>
<Link to="/">
  <img
    className="ImagenLogo"
    src="./img/logoMickolStyle.jpg"
    alt="Imagen Logo Mickol Style"
  />
</Link>
<h1 className='NavarH1'>LoDeMickol Style</h1>

{/* Botón hamburguesa */}
<button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
  ☰
</button>

{/* Menú de navegación */}
<nav className={menuOpen ? "open" : ""}>
  <ul>
    <li>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <h2 className='NavarH2'>Inicio</h2>
      </Link>
    </li>
    <li>
      <Link to="/categoria/Hombre" onClick={() => setMenuOpen(false)}>
        <h2 className='NavarH2'>Hombre</h2>
      </Link>
    </li>
    <li>
      <Link to="/categoria/Mujer" onClick={() => setMenuOpen(false)}>
        <h2 className='NavarH2'>Mujer</h2>
      </Link>
    </li>
  </ul>
</nav>

<CartWidget/>
</header>




  )
}

export default NavBar

