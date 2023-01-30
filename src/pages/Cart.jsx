import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet'
import { cartActions } from '../redux/slices/cartSlice';

const Cart = () => {
  const cart= useSelector(state => state.cart.cartItem);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch()
const handleRemoveItem =(id)=>{
  dispatch(cartActions.removeItem(id))
}
const handleSetItem =(id, handle, amount)=>{
  if(handle==='minus'){
    if(--amount ===0){
      dispatch(cartActions.removeItem(id));
    }
    else{
      dispatch(cartActions.setItem({
        minus: 'true',
        id,
      }))
    }
  }
  else{
    dispatch(cartActions.setItem({
      id,
    }))
  }
}
useEffect(() =>{
  setTotal(cart.reduce((prev, cur) =>{
    return prev += cur.totalPrice;
  },0))
},[cart])
  return (
    <Helmet title={"Cart"}>
      <div className="conteiner p-4 pt-20">
      {cart.map((item, id) =>(
        <div className="flex p-4 border-2 items-center justify-between" key={id}>
          <div className=" flex">
            <img className="h-20 w-20" src={item.image} alt="" />
            <div className="ml-6 flex flex-col justify-between ">
            <h3>{item.productName}</h3>
            <div className='flex items-center'>Amount : 
              <div 
                onClick={() => handleSetItem(item.id,'minus', item.amount)}
                className='p-2'><i className="fa-solid fa-minus"></i>
              </div> 
              {item.amount} 
              <div 
                onClick={() => handleSetItem(item.id,'plus', item.amount)}
                
                className='p-2'><i className="fa-solid fa-plus"></i></div>
            </div>
            
            <p>{item.price}</p>
            
          </div>
          </div>
          
          <div className="h-20 flex flex-col justify-between items-end">
            <div 
              onClick={() =>handleRemoveItem(item.id)}
              className="p-2 text-xl cursor-pointer">
            <i className="fa-solid fa-trash-can"></i>
            </div>
            <p>Total :{item.totalPrice}</p>
          </div>
        </div>
      ))}
      <div className="text-right mt-6 font-medium">
      <h1>Total : {total}$</h1>
      <Link to={"/checkout"}><button className='p-2 pl-6 pr-6 bg-gray-900 text-white rounded-lg'>Checkout</button></Link>
      <Link to={"/shop"}><button className='ml-2 p-2 pl-6 pr-6 bg-gray-900 text-white rounded-lg'>Continue Shopping</button></Link>

      </div>

      </div>
      </Helmet>
  )
}

export default Cart
