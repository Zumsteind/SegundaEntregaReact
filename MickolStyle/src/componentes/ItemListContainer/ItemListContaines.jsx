import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {getProductos} from "../../../asyncmock"

const ItemListContaines = () => {


const [Productos, setProductos]= useState([])  //esto creamos un objetos prod io y setproducto es la funcion para poder cambiarle el estado

  useEffect(()=>{

    getProductos()  //obtenemos los productos que creamos y recibimos una promesa
    .then(respuesta => setProductos(respuesta)) // en esa promesa metemos en la objeto productos que creamos le cambiamos el estado con setproductos
    .catch(error => console.log(error))



  },[])

  return (
    <div>

        <h2>Mis productos</h2>
   
        <ItemList productos={Productos} />  
    </div>
  )
}

export default ItemListContaines