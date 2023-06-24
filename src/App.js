import React from 'react'
import Category from "./Pages/Category"
import Products from "./Pages/Products";
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
const App = () => {
  return (

    <>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='category/' element={<Category />} />
        <Route path='category/:items' element={<Category />} />
        <Route path='/:id/:title' element={<Products />} />

      </Routes>

    </>
  )
}

export default App
