import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContaines from './componentes/ItemListContainer/ItemListContaines'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import { CarritoProvider } from './componentes/Context/CarritoContext'
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';




function App() {
  //const [count, setCount] = useState(0)

  return (


      

    <Router>
        <CarritoProvider>
            <NavBar />

          <Routes>
              <Route exact path='/' element={ <ItemListContaines/>} />
              <Route exact path='/categoria/:idCategoria' element={<ItemListContaines/>} />
              <Route exact path='/producto/:id' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/Checkout' element={<Checkout/>}/>
              <Route path='*' element={ <h2> Sitio en Construccion</h2> }/>
          </Routes>

       </CarritoProvider>
       <ToastContainer />
    </Router>




    

  )
}



// function App() {
//   //const [count, setCount] = useState(0)

//   return (
//     <>
//     <NavBar />
    
//     <ItemListContaines/>
    
//     <ItemDetailContainer/>

    
//     </>
//   )
// }

export default App
