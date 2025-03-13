import React from 'react'

const PeopleCard = () => {
    return <div className='border p-4 border-opacity-75 h-min' >
        <div className='flex items-center gap-2' >
            <div className='w-12 h-12 bg-black rounded-full' >

            </div>
            <div>
                <p className='font-semibold' >Marco Cornacchia</p>
                <p className='text-xs' >Agarwal Hospitals</p>
            </div>
        </div>
        <p className='mt-4 text-sm' >To book an appointment with a specialist through our platform, simply navigate to the "Book an Appointment" section. Select the type of healthcare service or specialist you need, then choose from</p>
    </div>
}

const PeopleCard2 = () => {
    return <div className='border p-4 border-opacity-75' >
        <div className='flex items-center gap-2' >
            <div className='w-12 h-12 bg-black rounded-full' >

            </div>
            <div>
                <p className='font-semibold' >Marco Cornacchia</p>
                <p className='text-xs' >Agarwal Hospitals</p>
            </div>
        </div>
        <p className='mt-4 text-sm' >To book an appointment with a specialist through our platform, simply navigate to the "Book an Appointment" section. Select the type of healthcare service or specialist you need, then choose from
        To book an appointment with a specialist through our platform, simply navigate to the "Book an Appointment" section. Select the type of healthcare service or specialist you need, then choose from
        To book an appointment with a specialist through our platform, simply navigate to the "Book an Appointment" section. Select the type of healthcare service or specialist you need, then choose from
        To book an appointment with a specialist through our platform, simply navigate to the "Book an Appointment" section. Select the type of healthcare service or specialist you need, then choose from
        </p>
    </div>
}

const PeopleTalks = () => {
  return (
    <div className='py-10 text-white px-5' >
        <p className='text-center font-bold text-6xl' >What people talk about us</p>
        <div className='grid grid-cols-4 grid-flow-dense gap-4 mt-20' >
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard2 />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
        </div>
    </div>
  )
}

export default PeopleTalks