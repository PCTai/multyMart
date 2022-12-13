import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-slate-900 text-white pt-12 pb-12'>
      <div className="container flex m-auto justify-between footer-col">
        <div className=" mr-2 mb-2">
          <h3 className="text-xl mb-6 font-semibold">Mutilmart</h3>
          <p className='max-w-xs maxwidth text-sm font-normal text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos unde quos accusantium nobis amet! </p>
        </div>
        <div className="mr-2 ">
          <h3 className="text-xl font-medium mb-6">Top categorys</h3>
          <ul className='list-none'>
            <li className='text-sm mb-3'><a href="/">Mobile Phone</a></li>
            <li className='text-sm mb-3'><a href="/">Modern Sofa</a></li>
            <li className='text-sm mb-3'><a href="/">Arm Chair</a></li>
            <li className='text-sm mb-3'><a href="/">Smart Watches</a></li>
          </ul>
        </div>
        <div className="mr-2">
          <h3 className="text-xl font-medium mb-6">Useful Links</h3>
          <ul className='list-none'>
            <li className='text-sm mb-3'><a href="/">Shop</a></li>
            <li className='text-sm mb-3'><a href="/">Cart</a></li>
            <li className='text-sm mb-3'><a href="/">Login</a></li>
            <li className='text-sm mb-3'><a href="/">Private Policy</a></li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-xl font-medium mb-6">Contact</h3>
          <ul className='list-none'>
            <li className='text-sm mb-3'><a href="/"><i className="fa-solid fa-location-dot mr-2"></i>75 Hue , Viet Nam</a></li>
            <li className='text-sm mb-3'><a href="/"><i className="fa-solid fa-phone mr-2"></i>+0283728373</a></li>
            <li className='text-sm mb-3'><a href="/"><i className="fa-solid fa-envelope mr-2"></i>example@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
