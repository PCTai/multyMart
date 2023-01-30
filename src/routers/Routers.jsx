
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRouter from './ProtectedRouter';
import AllProducts from '../admin/AllProducts';
import AddProduct from '../admin/AddProduct';
import Dashboard from '../admin/Dashboard';
const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to={'home'}/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='/*' element={<ProtectedRouter/>}>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='dashboard/all-products' element={<AllProducts/>}/>
          <Route path='dashboard/add-product' element={<AddProduct/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          
        </Route>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
    </Routes>
  )
}

export default Routers
