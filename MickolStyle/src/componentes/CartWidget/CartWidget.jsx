import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../Context/CarritoContext'

const CartWidget = () => {
            
  const carritoImage = "https://cdn-icons-png.flaticon.com/512/846/846423.png"
  const {cantidadTotal} = useContext(CarritoContext)
    return (
    
    
      <div>
          <Link to = "/cart">

          <img src={carritoImage} alt="Imagen Carrito Compra"></img>

          </Link>

      </div>
    )
}

export default CartWidget