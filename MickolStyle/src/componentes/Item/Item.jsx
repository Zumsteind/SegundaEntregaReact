import React from 'react'
import './Item.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img,descripcion}) => {

  return (
    <div className='carProducto'>

        <img src={img} alt={nombre}  />

     
        <h3> {nombre} </h3>
  
        <div className='ContenedorDetalleProducto'>
        <p>{descripcion}</p>
        <p>Precio: {precio} $</p>
        {/* <p>Codigo: {id}</p> */}

        </div>

       
      <Link to={`/producto/${id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  )
}

export default Item