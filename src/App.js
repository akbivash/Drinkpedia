import React from 'react'
import Navbar from './components/Navbar'
import {Routes,Router, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Error from './pages/Error'
import SingleItem from './pages/SingleItem'
const App = () => {
  return (
  <>

    <div className="app">
    <Navbar/>
   <div className="routes">
   <Routes>
   <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/cocktail/:id' element={<SingleItem/>} />
     <Route path='*' element={<Error/>} />
   </Routes>
   </div>
    </div>
  
  </>
  )
}

export default App