import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import {getProductos, getProductosPorCategoria} from "../../../asyncmock"
import { useParams } from 'react-router-dom'

const ItemListContaines = () => {


const [Productos, setProductos]= useState([])  //esto creamos un objetos prod io y setproducto es la funcion para poder cambiarle el estado

const {idCategoria}= useParams();



  useEffect(()=>{

    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos; // ejecuta si idcategoria tiene algo getproductorporcategoria
    // si idcategoria no tiene nada ejecuta getproductos

    funcionProductos(idCategoria)
    .then(res => setProductos(res))


  },[idCategoria])


  return (
    <div className='Contenedor'>
        
        <h2>Mis productos</h2>
   
        <ItemList productos={Productos} />  
    </div>
  )
}

export default ItemListContaines