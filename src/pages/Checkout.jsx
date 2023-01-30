import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common/CommonSection'
import { useSelector } from 'react-redux'
import { selectQuantity, selectTotal } from '../redux/slices/cartSlice'

const Checkout = () => {

  const total = useSelector(selectTotal);
  const quantity = useSelector(selectQuantity);
  return (
    <Helmet title={"Checkout"}>
        <CommonSection title="Checkout"></CommonSection>
        <div className="checkout container m-auto pt-10 pb-10">
            <div className="flex justify-center">
              <form action="" className='flex flex-col flex-1 mr-6'>
                <h3 className="font-medium">Bill infomation</h3>
                <input type="text" placeholder='Enter your name' className='p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />
                <input type="text" placeholder='Enter your email' className='p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />
                <input type="text" placeholder='Phone number' className='p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />
                <input type="text" placeholder='Street address' className='p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />
                <input type="text" placeholder='City' className='p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />
                <input type="text" placeholder='Postal code' className='p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />
                <input type="text" placeholder='Conntry' className='p-1 pl-4 pr-4 mt-4 border-2 outline-none rounded' />

              </form>
              <div className="w-96  text-white h-auto">
                <div className="bg-gray-900 p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className=''>Total Qty :</h3>
                  <h3> {quantity} items</h3>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <h3 className=''>SubTotal :</h3>
                  <h3> ${total}</h3>
                </div>
                <div className="flex justify-between items-center mt-4">
                <h3 className=''>Shiping :</h3>
                <h3>$0</h3>
                </div>
                <span>Free ship</span>
                <div className='flex justify-between border-t-2 pt-4 mt-6'>
                  <h2 className=''>Total cost :</h2><h2> ${total}</h2>
                </div>
                <button className='w-full mt-6 p-2 bg-gray-100 text-gray-900 rounded-md font-medium'>Place an order</button>
                
                </div>
              </div>
            </div>

          </div>
      </Helmet>
  )
}

export default Checkout
