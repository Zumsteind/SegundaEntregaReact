import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div className='ContenedorItem'>
        
        <h1>Detalle de Producto</h1>
        <h3>{nombre} </h3>
        <p>Precio: {precio} $</p>
        <p>Codigo: {id}</p>
        <img src={img} alt={nombre}  />
        <p>Remera de Calidad Premiun.</p>

    </div>
  )
}

export default ItemDetail