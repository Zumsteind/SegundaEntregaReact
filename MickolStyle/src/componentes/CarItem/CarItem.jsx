import { useContext } from "react";


import React from 'react'
import { CarritoContext } from "../Context/CarritoContext";
import './CarItem.css'

const CartItem = ({item,cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div>
        <h4>{item.nombre}</h4>
        <p>Cantidad : {cantidad}</p>
        <p>Precio: {item.precio}</p>
        
        <button className="EliminarItem" onClick={()=>eliminarProducto(item.id)}> Eliminar Producto</button>

        <hr></hr>
    </div>
  )
}

export default CartItem