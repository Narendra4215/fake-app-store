import React from 'react'
// import Category from "./Pages/Category"
import Products from "./Pages/Products";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
const App = () => {
  return (

    <>
<Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/:id/:title' element={<Products />} /> 

      </Routes>

    </>
  )
}

export default App
