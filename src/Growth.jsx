import React from 'react'
import Book from './../public/Book.png'

const Growth = () => {
  return (
    <div className='mt-32 grid grid-cols-5 place-items-center gap-x-10' >
        <div className='col-span-2' >
            <img src={Book} alt="" />
        </div>
        {/* <div></div> */}
        <div className='col-span-3 text-white p-6' >
            <p className='text-6xl font-bold w-[80%] mb-6' >Make a growth wave in your business with these 12 simple growth strategies</p>
            <p className='w-[75%]' >Oceans Ad Agency offers 12 simple strategies to boost healthcare business success. From patient engagement to brand growth, this guide is your key to staying ahead in the competitive market.</p>
            <button className='px-4 p-2 rounded-full bg-[#FFED00] text-blue-500 mt-4' >Download</button>
        </div>
    </div>
  )
}

export default Growth