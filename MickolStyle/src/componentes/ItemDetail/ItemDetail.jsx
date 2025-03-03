import React, { useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import Contador from '../Contador/Contador';
import { CarritoContext } from '../Context/CarritoContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'bootstrap';

const ItemDetail = ({id,nombre,stock,precio,img,descripcion}) => {

  const {agregarAlCarrito} = useContext(CarritoContext)

  const [agregarCantidad,setAgregarCantidad]=useState(0);

      const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = {id,nombre, precio}
        agregarAlCarrito(item,cantidad)
       
        toast.info('Su Compra Fue Cargada en el Carrito!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          });
        
      }

    return (
      
          <div className='ContenedorItem'>
                    
                    <h1>Detalle de Producto</h1>
                    <div className='contenedorDetalleProducto'>
                          <h3>{nombre} </h3>
                         <p >Codigo: {id}</p>
                          
                          

                    </div>
                    
                    <img src={img} alt={nombre}  />
                  
                    <p>{descripcion}</p>
                    <p>Stock: {stock}</p>
                    <p>Precio: {precio} $</p>

                    {
                    agregarCantidad > 0 ? (<Link  to="/cart" className='terminarCompra'>Terminar compra </Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
                    }

                </div>

      
     
    )
}

export default ItemDetail