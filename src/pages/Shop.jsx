import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common/CommonSection'
import { useState } from 'react';

import listProduct from '../assets/data/products'; 
import { useEffect } from 'react';
import ProductList from '../components/UI/ProductList';
import ProductCart from '../components/UI/ProductCart';
import { sorter2 } from '../helper/helper';

const Shop = () => {
  const [products, setProducts] =useState(listProduct);
  const [filter, setfilter] =useState('all');
  const [sort, setSort] =useState('asc');
  const [search, setSearch] =useState('');
  console.log(sort, filter, search);
  console.log(products)

  useEffect(() =>{
    setProducts(() =>{
      if(filter==='all'){
        return listProduct.filter(product => product.productName.toLowerCase().includes(search)).sort(sorter2('productName', sort));
      }
      return listProduct.filter(product =>{
        return product.category===filter;
      }).filter(product => product.productName.toLowerCase().includes(search)).sort(sorter2('productName', sort))
    })
  },[search,filter,sort])
 
  return (
    <Helmet title={"Shop"}>
        <CommonSection title={'Products'}/>
        <div className="container m-auto p-4  border-b-2">
          <div className="flex justify-between">
            <div className="flex">
            <select 
              onChange={e =>setfilter(e.target.value)}
              className='border-2 bg-gray-900 text-white rounded-md pl-2 pr-2'
              defaultValue={''}>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value={'all'}>Filter category</option>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="sofa">Sofa</option>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="mobile">Mobile</option>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="chair">Chair</option>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="watch">Watch</option>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="wireless">Wireless</option>
            </select>
            <select 
              onChange={e =>setSort(e.target.value)}

              className='border-2 bg-gray-900 text-white ml-2 rounded-md pl-2 pr-2'>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="asc">Sort by</option>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="asc">Asending</option>
              <option className='pt-4 pb-4 bg-white text-gray-900 block' value="desc">Descending</option>
            </select>
            </div>
            <div className="ml-4">
              <input 
                onChange={e =>setSearch(e.target.value)}
                
                type="text" className='p-2 pl-4 pr-4 rounded-md border-2 border-gray-900 outline-gray-900 focus:border-white' 
                placeholder='Enter key'
              />
            </div>
          </div>
        </div>
        <div className="list-product container m-auto p-4 pb-20">
            {
              products.length>0 ? <ProductList products={products}/> : <h3 className='text-ellipsis text-center'>No Product are found!</h3>
            }
        </div>
    </Helmet>
  )
}

export default Shop
