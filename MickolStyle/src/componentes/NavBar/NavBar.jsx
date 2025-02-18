import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
                <header>
                <Link to="/">
                <img className='ImagenLogo' src="./img/logoMickolStyle.jpg"  alt="Imagen Loco Mickol Style" />
                </Link>
                <h1>LoDeMickol Style</h1>
                    
                    
                    <nav>
                        <ul>
                        <li>  <Link to="/"><h2>Home</h2></Link>  </li>

                        <li>  <Link to="/categoria/Hombre"><h2>Hombre</h2></Link>  </li>

                        <li>  <Link to="/categoria/Mujer"><h2>Mujer</h2></Link>  </li>
                           
                      
                        </ul>


                    </nav>

                 <CartWidget/>

                </header>



  )
}

export default NavBar

