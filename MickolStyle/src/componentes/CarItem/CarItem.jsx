import { useContext } from "react";


import React from 'react'
import { CarritoContext } from "../Context/CarritoContext";
import './CarItem.css'

const CartItem = ({item,cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext)

  return (
    <div>
        <h3>{item.nombre}</h3>
        <div className="DetalleProducto">
          <p>Cantidad : {cantidad}</p>
          <p>Precio: {item.precio} $</p>

        </div>
       
        
        <button className="EliminarItem" onClick={()=>eliminarProducto(item.id)}> Eliminar Producto</button>

        <hr className="colorlinea"></hr>
    </div>
  )
}

export default CartItem