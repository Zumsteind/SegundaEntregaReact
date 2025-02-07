import React from 'react'
import { useState, useEffect } from 'react'
import { getUnProducto } from '../../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const [producto, setProducto]=useState(null);
  const {id}= useParams();

    useEffect(()=>{

      console.log("el id que toma es :"+id )
        getUnProducto(parseInt(id))
        .then(respuesta=>setProducto(respuesta))


    },[])


  return (
    <div>

        <ItemDetail  {...producto}/>


    </div>
  )
}

export default ItemDetailContainer