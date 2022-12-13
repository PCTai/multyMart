import React from 'react';
import services from '../../assets/data/services' 

const Services = () => {
  return (
    <div className='service'>
      <div className="service-container container m-auto  mt-12 mb-12">
        {services.map((service, index) =>(
            <div key={index} className="p-4 flex rounded-md" style={{backgroundColor: `${service.bg}`}}>
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white leading-10 text-center text-xl">
                    <i className={`${service.icon}`}></i>
                </div>
                <div className="ml-2">
                    <h3 className='font-semibold'>{service.title}</h3>
                    <p className='text-gray-900 text-sm'>{service.subtitle}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
