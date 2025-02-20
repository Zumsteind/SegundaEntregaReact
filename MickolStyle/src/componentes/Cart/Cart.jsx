import { useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext";
import { Link } from "react-router-dom";

import React from 'react'

import CartItem from "../CarItem/CarItem";
import './Cart.css'

const Cart = () => {

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)


    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito.</h2>
                <Link to = "/"> Ver Productos</Link>
            </>
        )
    }


  return (
    <div className="ContenedorCart">
        {
            carrito.map(producto => <CartItem key={producto.id} {...producto}/>)
        }
         <h6>Cantidad: {cantidadTotal}</h6>
            <h4>Total a Pagar: ${total}</h4>
           
            <button className="vaciarCarrito" onClick={()=> vaciarCarrito()}> Vaciar Carrito</button>
            <Link to="/checkout" className="terminarCompra"> Finalizar Compra</Link>
    </div>
  )
}

export default Cart