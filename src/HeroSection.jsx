import React from 'react'
import doctimage from './../public/image.png'
import tenX from './../public/Title.png'
import lines from './../public/Lines.png'


const HeroSection = () => {
  return (
    <div className='grid grid-cols-12 bg-blue-500 place-items-center gap-4 pb-6 relative' >

        <img src={tenX} width={1145} alt="" className='absolute z-20' />
        <img src={lines} alt="" className='absolute -top-10 z-0' />

        <div></div>
        <div className='col-span-5 w-full' >
            
                <div className='flex justify-end mb-[80px] float-right' >
                    <img src={doctimage} width={344} height={517} className='z-10' />
                </div>
                
     
        </div>
        <div className='col-span-5 h-full' >
            <div className='flex items-end h-full' >

            </div>
        </div>
        <div></div>
        <div></div>
        <div className='col-span-5 h-full' >
            <div className='h-full' >
                <p className='text-3xl font-bold top-0 text-white' >Drive up to 10X Healthcare Revenue</p>
            </div>
        </div>
        <div className='col-span-5 text-white' >
            <p>Looking to grow your business fast? At Oceans Ad Agency, we specialize in
                strategies that can help you achieve up to 15X ROI in just 90 days. Whether
                it’s boosting your brand, driving leads, or scaling your marketing, we focus
                on real results. Let’s work together to make your goals a reality! 
            </p>
        </div>
        <div></div>
    </div>
  )
}

export default HeroSection