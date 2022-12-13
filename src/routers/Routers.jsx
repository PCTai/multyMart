
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'home'}/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Routers
