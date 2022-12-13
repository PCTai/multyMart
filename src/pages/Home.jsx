import React from 'react'
import Banner from '../components/common/Banner'
import Services from '../components/common/Services'
import Helmet from '../components/Helmet/Helmet';
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList';
import { useState } from 'react';
import { useEffect } from 'react';
import Clock from '../components/UI/Clock';
const Home = () => {
  const [data, setData] =useState(products);
  const [trending, setTrending] =useState([]);
  const [sale, setSale] =useState([]);
  const [mobile, setMobile] =useState([]);
  const [watch, setWatch] =useState([]);
  // console.log(trending);
  useEffect(() =>{
    setTrending(data.filter(item =>{
      return item.category==='chair';
    }))
    setSale(data.filter(item =>{
      return item.category==='sofa';
    }))
    setMobile(data.filter(item =>{
      return item.category==='mobile';
    }))
    setWatch(data.filter(item =>{
      return item.category==='watch';
    }))
  },[data])
 

  return (
    <div className='home'>
      <Helmet title={"Home"}>
        <Banner/>
        <Services></Services>
        <section className='container m-auto mt-12 mb-12'>
          <h3 className='font-semibold text-gray-900 text-3xl text-center'>Trending Products</h3>
          <ProductList products={trending}/>
        </section>
        <section className='container m-auto mt-12 mb-12'>
          <h3 className='font-semibold text-gray-900 text-3xl text-center'>Best Sales</h3>
          <ProductList products={sale}/>
        </section>
        <Clock/>
        <section className='container m-auto mt-12 mb-12'>
          <h3 className='font-semibold text-gray-900 text-3xl text-center'>New Arrivals</h3>
          <ProductList products={mobile}/>
        </section>
        <section className='container m-auto mt-12 mb-12'>
          <h3 className='font-semibold text-gray-900 text-3xl text-center'>Popular in Category</h3>
          <ProductList products={watch}/>
        </section>
      </Helmet>
    </div>
  )
}

export default Home
