import React from 'react'
import Review from './Review'

const ListReview = ({reviews}) => {
  return (
    <div>
      {reviews && reviews.map((review, id) =>(
        <Review key={id} review={review}/>
      ))}
    </div>
  )
}

export default ListReview
