import React from 'react'
import man from './../public/man.png'

const Card = () => {
    return <div>
        <img src={man} alt="" />
        <div className='text-white mt-2' >
            <p className='font-semibold' >Anji Reddy P</p>
            <p className='text-sm' >Growth Marketing Manager</p>
        </div>
    </div>
}

const OurTeam = () => {
  return (
    <div className='px-4 py-10 mt-32 grid place-items-center' >

        <p className='text-6xl font-bold text-white' >Our Team</p>

        <div className='grid grid-cols-5 gap-4 mt-16' >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </div>

    </div>
  )
}

export default OurTeam