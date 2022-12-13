import React from 'react'
import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero-img.png'

const Banner = () => {

    const year= new Date().getFullYear();
  return (
    <div className='banner bg-blue-100'>
      <div className="flex container pt-24 pb-24 m-auto ">
        <div className="content flex-1">
            <h5 className='mb-6'>Trending product in {year}</h5>
            <h1 className='text-gray-900 text-3xl font-semibold mb-4'>Make Your Interior More Minimalistic & Modern</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta fugit, vel illo ipsum cupiditate vero veritatis fuga!</p>
            <Link to={'/shop'}><button className='p-2 pr-4 pl-4 rounded-lg mt-6 bg-gray-900 text-white hover:scale-105 hover:opacity-75'>Shop now</button></Link>
        </div>
        <div className="flex-1 image-banner">
            <img src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
