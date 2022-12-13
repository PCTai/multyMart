import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet'
import ListReview from '../components/Review/ListReview';
import { cartActions } from '../redux/slices/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  const [option , setOption] = useState('desc');
  const [rating , setRating] = useState(5);

  console.log(product);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: product.id,
      productName: product.productName,
      price: product.price,
      image: product.imgUrl
    }))
    toast.success('Add product success')

  }
  return (
    <Helmet title={"Details"}>
      <div className="container m-auto mt-3 p-4 pb-28 ">
        <div className="grid-custom">
          <div className="">
            <img className='w-full' src={product.imgUrl} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className='font-bold'>{product.productName}</h1>
            <p className='text-gray-900 font-semibold mt-2'>{product.avgRating} <i className="text-yellow-500 ml-2 fa-solid fa-star"></i></p>
            <p className='mb-6 mt-2'>{product.shortDesc}</p>
            <h3 className='font-semibold'>{product.price} $</h3>
            <button
              onClick={addToCart}
              className="p-4 mt-6 rounded-md text-white bg-gray-900 text-center max-w-xs">
              Add to cart
            </button>
          </div>
          
        </div>
        <div className="flex mt-6 border-b-2 text-gray-400">
            <button 
              className={`p-2 pl-0 pr-6 font-medium  ${option === 'desc' ? 'text-gray-900' : ''}`} 
              value={'desc'} onClick= {e => setOption(e.target.value)}>Desctription</button>
            <button 
              className={`p-2 pl-0 pr-6 font-medium  ${option === 'review' ? "text-gray-900" : ''}`} 
                value={'review'} onClick= {e => setOption(e.target.value)}>Reviews</button>
        </div>
          {option === 'desc'? 
            (<div>
              <p>{product.description}</p>
            </div>) 


          : <ListReview reviews={product.reviews}/>}
        <div className="">
          <h3 className='text-gray-900 mt-8 font-bold mb-4'>Leave your experience</h3>
          <form action="" method="get">
            <input type="text" placeholder='Enter Name' className='w-full border-2 border-gray-500'/>
            <div className="flex">
              <div 
                onClick={() => setRating(1)}
              className="">
                1<i class="fa-solid fa-star"></i>
              </div>
              <div 
                onClick={() => setRating(2)}
              className="">
                2<i class="fa-solid fa-star"></i>

              </div>
              <div 
                onClick={() => setRating(3)}
              className="">
                3<i class="fa-solid fa-star"></i>

              </div>
              <div 
                onClick={() => setRating(4)}
              className="">
                4<i class="fa-solid fa-star"></i>

              </div>
              <div 
                onClick={() => setRating(5)}
              className="">
                5<i class="fa-solid fa-star"></i>

              </div>
            </div>
            <textarea name="" id="" rows="5" className='w-full border-2 border-gray-500'></textarea>
            <br />
            <button
              onClick={addToCart}
              className="p-2 mt-6 rounded-md text-white bg-gray-900 text-center w-32">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Helmet>
  )
}

export default ProductDetails
