import React from 'react'
import turtle from './../public/turtle.png'

const FreeConsultation = () => {
  return (
    <div className='grid grid-cols-2 text-white px-5 my-10 relative place-items-center mt-40 h-screen' >
        <img src={turtle} width={600} className='absolute right-64 -top-20 z-0' />
        <div>
            <p className='text-7xl font-bold' >Take first step to improve your business to serve people better</p>
            <p className='mt-6 w-4/5' >Hi Health Care Business Owners,
            Reach out to us today and take the first step toward a healthier, more vibrant you. Our caring team is dedicated to offering personalized guidance, resources, and support to help you achieve your unique health goals. Let’s work together to create a wellness journey that empowers and uplifts you at every stage.</p>
        </div>
        <div className='z-10' >
            <div className='bg-white p-4 text-black space-y-4 w-96 ' >
                <p className='text-lg' >Book 30Minutes free consultation</p>
                <input type="text" className='bg-gray-100 w-full p-2 rounded-full' placeholder='Your Name' />
                <input type="text" className='bg-gray-100 w-full p-2 rounded-full' placeholder='Phone Nimber' />
                <input type="text" className='bg-gray-100 w-full p-2 rounded-full' placeholder='Email Id' />
                <input type="text" className='bg-gray-100 w-full p-2 rounded-full' placeholder='Industry' />
                <input type="text" className='bg-gray-100 w-full p-2 rounded-full' placeholder='Location' />
                <button className='w-full rounded-full p-2 bg-blue-500 text-white' >Register now</button>
            </div>
        </div>
    </div>
  )
}

export default FreeConsultation