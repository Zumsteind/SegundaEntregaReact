import React from 'react'
import { useState, useEffect } from 'react'
//import { getUnProducto } from '../../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../Services/Config';
import { getDoc,doc } from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [producto, setProducto]=useState(null);
  const {id}= useParams();

  useEffect(()=>{

   const nuevoDoc = doc(db,"Productos",id)
   getDoc(nuevoDoc)
   .then(res=>{
    const data=res.data();
    const nuevoProducto={id:res.id,...data};
    setProducto(nuevoProducto);
   })

  },[id])

    // useEffect(()=>{

    //   console.log("el id que toma es :"+id )
    //     getUnProducto(parseInt(id))
    //     .then(respuesta=>setProducto(respuesta))


    // },[])


  return (
    <div className='ContenedorDetalles'>

        <ItemDetail  {...producto}/>


    </div>
  )
}

export default ItemDetailContainer