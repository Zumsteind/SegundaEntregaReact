import React, { useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';

const ItemDetail = ({id,nombre,stock,precio,img}) => {

const [agregarCantidad,setAgregarCantidad]=useState(0);

  const manejadorDeCantidad = (cantidad)=>{
    setAgregarCantidad(cantidad);
    console.log("La cantidad de productos agregador es: "+ cantidad);

  }

  return (
    <div className='ContenedorItem'>
        
        <h1>Detalle de Producto</h1>
        <h3>{nombre} </h3>
        <p>Precio: {precio} $</p>
        <p>Codigo: {id}</p>
        <img src={img} alt={nombre}  />
        <p>Remera de Calidad Premiun.</p>

        {agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>): (<Contador inicial={1} stock={stock} funcionAgregar={manejadorDeCantidad} />) }

    </div>
  )
}

export default ItemDetail