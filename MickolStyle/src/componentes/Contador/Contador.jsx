import React, { useState } from 'react'
import './Contador.css'

const Contador = ({inicial,stock,funcionAgregar}) => {
  const [contador,setContador]=useState(inicial);

        const sumarContador = () =>{
            if(contador < stock){
                setContador(contador + 1);

            }

        }
  
        const restarContador = () =>{
            if(contador > inicial){
                setContador(contador - 1);

            }

        }
  
  
    return (
<>

            
    <div>
            <button className='botonContador0' onClick={restarContador}>-</button>
                <strong>  {contador}  </strong>
                <button className='botonContador1' onClick={sumarContador}>+</button>


    </div>

    <button className='botonContador' onClick={()=> funcionAgregar(contador)}>Agregar al Carrito</button>

</>

  )
}

export default Contador