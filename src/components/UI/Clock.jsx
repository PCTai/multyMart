import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import timer from '../../assets/images/counter-timer-img.png'

const Clock = () => {
    const [days, setDays] =useState();
    const [hours, setHours] =useState();
    const [minutes, setMinutes] =useState();
    const [secs, setSecs] =useState();

    let interval;

    const countDown =() =>{
        const futureTime= new Date('Dec 20, 2022').getTime();
        interval = setInterval(() =>{
            const timeNow= new Date().getTime();
            const different= futureTime- timeNow;
            setDays(Math.floor(different/(1000 * 60 * 60 * 24)));
            setHours(Math.floor(different %(1000 * 60 * 60 * 24) /(1000 * 60 * 60)));
            setMinutes(Math.floor(different % (1000 * 60  * 60) /(1000 * 60 )));
            setSecs(Math.floor(different % (1000 * 60) /(1000)));

            if(different<0){
                clearInterval(interval);
            }
        })

    }

    useEffect(() =>{
        countDown ();
    },[])


    // console.log(futureTime)
    return (
        <div className='clock bg-gray-900 '>
            <div className="container m-auto flex justify-between items-center">
                <div className="l">
                    <h3 className="text-white font-semibold">Limited Offers</h3>
                    <h3 className="text-white font-semibold">Quantity Armchair</h3>
                    <div className="flex items-center mt-4">
                        <div className="text-center">
                            <h3 className="text-white">{days}</h3>
                            <h5 className="text-white">Days</h5>
                        </div>
                        <h3 className="text-white m-5">:</h3>
                        <div className="text-center">
                            <h3 className="text-white">{hours}</h3>
                            <h5 className="text-white">Hours</h5>
                        </div>
                        <h3 className="text-white m-5">:</h3>
                        <div className="text-center">
                            <h3 className="text-white">{minutes}</h3>
                            <h5 className="text-white">Minutes</h5>
                        </div>
                        <h3 className="text-white m-5">:</h3>
                        <div className="text-center">
                            <h3 className="text-white">{secs}</h3>
                            <h5 className="text-white">Seconds</h5>
                        </div>
                    </div>
                    <Link to={'/shop'}><button className='p-2 pl-6 pr-6 bg-gray-200 font-semibold rounded-lg mt-8'>Visit shop</button></Link>
                    
                </div>
                <div className="r h-72 w-72 bg-fixed flex items-end">
                        <img src={timer} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Clock
