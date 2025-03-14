import React from 'react'
import logo from './../public/logo.svg'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-2' >
        <img src={logo} alt="" />
        <div className='flex justify-center gap-2 gap-x-6 items-center text-white' >
                <p>Home</p>
                <p>Health Care</p>
                <p>Real Estate</p>
                <p>Contact Us</p>
                <button className='px-4 p-2 rounded-full bg-[#FFED00] text-blue-500' >Talk to our Expert</button>
        </div>
    </div>
  )
}

export default Header