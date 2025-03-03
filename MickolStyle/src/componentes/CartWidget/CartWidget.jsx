import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../Context/CarritoContext'

const CartWidget = () => {
            
  const carritoImage = "https://imgs.search.brave.com/Wqj7drI9_83FdNPKpuB3l9B7dfwL7CyeMAGAdelKoAY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/NjU5Lzc2Ni9zbWFs/bC9nb2xkZW4tc2hv/cHBpbmctY2FydC1h/d2FpdGluZy1tZXJj/aGFuZGlzZS1wdXJj/aGFzZS1wbmcucG5n"
  const {cantidadTotal} = useContext(CarritoContext)
    return (
    
    
      <div>
          <Link to = "/cart">

          <img className='carrito' src={carritoImage} alt="Carrito de compras" />
        {
          cantidadTotal > 0 &&   <h5><strong> {cantidadTotal}</strong></h5>
        }
          
          </Link>

      </div>
    )
}

export default CartWidget