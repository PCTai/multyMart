import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {cartActions} from '../../redux/slices/cartSlice'


const ProductCart = (props) => {
  const data = props.product;
  const dispatch = useDispatch();
  const addToCart =() =>{
    dispatch(cartActions.addItem({
      id: data.id,
      productName : data.productName,
      price: data.price,
      image: data.imgUrl
    }))
    toast.success('Add product success')
    
  }
  
  return (
    <div className='p-4'>
      <Link to={`/shop/${data.id}`}><img src={data.imgUrl} alt="" /></Link>
      <div className="p-4">
      <h3 className='font-semibold mt-3 mb-0 text-gray-900'>{data.productName}</h3>
      <span className='text-gray-900 text-sm '>{data.category}</span>
      <div className="flex justify-between mt-4 items-center">
        <p className='text-gray-900 font-semibold'>{data.price}$</p>
        <div
          onClick={addToCart}
          className="w-6 h-6 rounded-full text-white bg-gray-900 leading-6 text-center">
          <i className="fa-solid  fa-plus"></i>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductCart
