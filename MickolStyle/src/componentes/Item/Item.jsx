import React from 'react'
import './Item.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img}) => {

  return (
    <div className='carProducto'>

        <img src={img} alt={nombre}  />
        <h3> {nombre} </h3>
        <p>Precio: {precio} $</p>
        <p>Id: {id}</p>
        

       
      <Link to={`/producto/${id}`}>
        <button>Ver Detalles</button>
      </Link>
    </div>
  )
}

export default Item