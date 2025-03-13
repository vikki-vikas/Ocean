import React from 'react'
import Seahorse from './../public/Seahorse.png'

const AboutUs = () => {
  return (
    <div className='grid grid-cols-3 mt-20 py-10 px-4 place-items-center relative ' >
        <img src={Seahorse} width={300} className='absolute -top-36 left-[400px]' />
        <img src={Seahorse} width={30} className='absolute left-96 top-1 rotate-y-180' />
        <img src={Seahorse} width={30} className='absolute left-80 top-20 rotate-y-180' />
        <img src={Seahorse} width={30} className='absolute left-96 top-40 rotate-y-180 ' />
            <div className='col-span-2 text-white w-full flex' >
                <div class="-rotate-90">
                    <p class="text-9xl font-bold text-left">About</p>
                    <p class="text-9xl font-bold">Us</p>
                </div>
            </div>
            <div>
                <p className='text-2xl text-white w-[70%]' >Welcome to Oceans Ad Agency—your trusted partner in the digital world! We’re here to help your brand grow and succeed online with customized marketing strategies and campaigns that deliver real results. By focusing on collaboration, creativity, and honesty, we make sure to bring your vision to life and keep your brand at the forefront. Let’s work together to navigate your path to success and take your brand to new digital heights!</p>
            </div>
    </div>
  )
}

export default AboutUs