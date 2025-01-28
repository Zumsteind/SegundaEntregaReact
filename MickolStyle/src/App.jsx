import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContaines from './componentes/ItemListContainer/ItemListContaines'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'



function App() {
  //const [count, setCount] = useState(0)

  return (


      

    <Router>

        <NavBar />


       

      <Routes>
          <Route exact path='/' element={ <ItemListContaines/>} />
          <Route exact path='/categoria/:idCategoria' element={<ItemListContaines/>} />
          <Route exact path='/producto/:id' element={<ItemDetailContainer/>} />

      </Routes>

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
