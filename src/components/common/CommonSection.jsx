

import React from 'react'

const CommonSection = ({title}) => {
  return (
    <div className='common-section m-auto flex justify-center items-center'>
      {title && <h3 className='text-2xl'>{title}</h3>}
    </div>
  )
}

export default CommonSection
