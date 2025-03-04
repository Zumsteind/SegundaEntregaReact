import React from 'react'

import { useContext, useState } from "react"
import { CarritoContext } from '../Context/CarritoContext' 
import { db } from '../../Services/Config' 
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import './Checkout.css'

const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total} = useContext(CarritoContext)

    const manejadorFormulario = (event) =>{
        event.preventDefault()

            //Verificamos que todos los campos esten completos:
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completa todos los campos!")
            return
        }
           //Validamos que los campos del email coincidan
        if(email !== emailConfirmacion) {
            setError ("Los campos del email no coinciden!")
            return
        }

        //1) Creamos un objeto con todos los datos de la orden de compra
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        //2) Guardar la orden en la base de datos
        
        Promise.all(
            orden.items.map( async (productoOrden)=>{
                const productoRef = doc(db, "Productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock : stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=> {
            addDoc(collection(db, "Ordenes"), orden)
            .then(docRef =>{
                setOrdenId(docRef.id)
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden" , error)
                setError("Se produjo un error al crear la orden")
            })
        })
        .catch((error) => {
            console.log("No se pudo actualizar el Stock", error)
            setError("No se puede actualizar el stock, intente en el supermedo Vital")
        })
    }



  return (
    <div className='ContenedorCarrito'> 
        <h1 className='titulo'>Checkout Final</h1>
        <br /><br />
        <hr />
        <div>
        <form onSubmit={manejadorFormulario}>

            <h3>Productos:</h3>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        
                        <p>{producto.item.nombre} X {producto.cantidad}</p>
                        <p>{producto.precio}</p>
                        <hr/>
                    </div>
                ))
            }

            <div className='DetalleFormulario'>
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input className='InputALaDerecha' type="text"  onChange={(e)=>setNombre(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Apellido</label>
                        <input className='InputALaDerecha' type="text" onChange={(e)=>setApellido(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Telefono</label>
                        <input className='InputALaDerecha' type="text" onChange={(e)=>setTelefono(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input className='InputALaDerecha' type="email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="">Email Confirmación</label>
                        <input className='InputALaDerecha' type="email" onChange={(e)=>setEmailConfirmacion(e.target.value)}/>
                    </div>              


            </div>
                                                    
             {
                error && <p style={{color: "red"}}> {error}</p>
             }

             <button className='botonFinalizar' type="submit">Confirmar compra</button>
             {
                ordenId && (
                    <strong>
                            Gracias por tu compra!! Tu numero de orden es: {ordenId}
                    </strong>
                )
             }
        </form>

        </div>
       
    </div>
  )
}

export default Checkout