import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
//import {getProductos, getProductosPorCategoria} from "../../../asyncmock"
import { useParams } from 'react-router-dom'
import { db } from '../../Services/Config'
import { collection,getDocs,query,where } from 'firebase/firestore'
import Loader from '../Loader/Loader'


const ItemListContaines = () => {


const [Productos, setProductos]= useState([]);  //esto creamos un objetos prod io y setproducto es la funcion para poder cambiarle el estado
const [loading,setLoading]= useState(true);

const {idCategoria}= useParams();


useEffect(()=>{
  const misProductos = idCategoria ? query (collection(db,"Productos"), where ("idCat","==",idCategoria)) : collection(db,"Productos");

    getDocs(misProductos)
    .then(res=>{
      const nuevosProductos = res.docs.map (doc=>{
        const data = doc.data();
        return {id:doc.id,...data}
      })
      setProductos(nuevosProductos);
    })
    .catch(error=>console.log(error))
    .finally(()=>{
      console.log("proceso Terminado");
      setLoading(false);

    })


},[idCategoria])


  // useEffect(()=>{

  //   const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos; // ejecuta si idcategoria tiene algo getproductorporcategoria
  //   // si idcategoria no tiene nada ejecuta getproductos

  //   funcionProductos(idCategoria)
  //   .then(res => setProductos(res))


  // },[idCategoria])


  return (
    <div className='Contenedor'>
        
        {/* <h2>Mis productos</h2> */}
    {loading ? <Loader/> : <ItemList productos={Productos} />   }  
    {/* si el loadin variable es true muestra el cargando sino muestra los productos. */}
    </div>
  )
}

export default ItemListContaines