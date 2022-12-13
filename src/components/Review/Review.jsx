import React from 'react'

const Review = ({review}) => {
  return (
    <div className='border-b-2 mt-2 pb-2'>
      <h3 className='font-semibold text-lg'>Jone Cena</h3>
      <p className='text-red-500 mb-2 font-semibold'>{review.rating} (rating)</p>
      <p className='text-gray-900'>{review.text}</p>
    </div>
  )
}

export default Review
