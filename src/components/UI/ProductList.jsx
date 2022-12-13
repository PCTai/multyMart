import React from 'react'
import ProductCart from './ProductCart'

const ProductList = (props) => {
    const products= props.products;
  return (
    <div className='product-list'>
      {products.map((product, index) =>(
        <ProductCart key={index} product={product}/>
      ))}
    </div>
  )
}

export default ProductList
