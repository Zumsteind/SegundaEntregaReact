import React from 'react'
import './CartWidget.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../Context/CarritoContext'

const CartWidget = () => {
            
  const carritoImage = "https://img.freepik.com/vector-premium/plantilla-vector-icono-carrito-compras-color-dorado_917138-3031.jpg"
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