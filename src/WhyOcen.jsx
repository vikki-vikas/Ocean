import React from 'react'
import o2 from './../public/octopus2.png'

import targetIcon from './../public/targetIcon.svg'
import people from './../public/people.svg'
import satIcon from './../public/satIcon.svg'
import sat2Icon from './../public/sat2Icon.svg'
import handIcon from './../public/handIcon.svg'
import Settings from './../public/settings.svg'

const Card = ({icon,title,details}) => {
    return <div className='bg-opacity-5 shadow p-6 space-y-4 text-white' >
        <img src={icon} alt="" />
        <div>
            <p className='font-semibold text-lg' >{title}</p>
            <p className='text-sm' >{details}</p>
        </div>
    </div>
}

const WhyOcen = () => {

    const data = [
        {
            icon : targetIcon,
            title : 'Tailored Strategies',
            details : 'We customize our marketing solutions to meet your unique business goals, ensuring maximum impact and relevance for your brand.'
        },
        {
            icon : people,
            title : 'Expert Team',
            details : 'Our experienced professionals bring diverse skills and insights, enabling us to develop innovative campaigns that resonate with your audience.'
        },
        {
            icon : satIcon,
            title : 'Data-Driven Approach',
            details : 'We leverage analytics and market research to guide our strategies, ensuring that every decision is backed by data for optimal results.'
        },
        {
            icon : Settings,
            title : 'Comprehensive Services',
            details : 'From social media management to SEO and targeted advertising, we offer a full suite of digital marketing services to elevate your brand’s presence across all platforms.'
        },
        {
            icon : handIcon,
            title : 'Collaborative Partnership',
            details : 'We believe in working closely with our clients, fostering open communication and seamless collaboration to truly understand and achieve your unique vision.'
        },
        {
            icon : sat2Icon,
            title : 'Proven Results',
            details : 'Our track record of delivering successful campaigns and satisfied clients speaks for itself, demonstrating our commitment to driving growth and success for your brand.'
        },
    ]

  return (
    <div className='mt-10 py-10 px-4 relative' >
        <img src={o2} alt="" className='absolute right-16 -top-36' />
        <div>
            <p className='text-[200px] font-bold text-white' >Why</p>
            <p className='text-[200px] font-bold text-white leading-3' >Oceans</p>
        </div>



        <div className='grid grid-cols-3 gap-4 mt-44' >
            {
                data.map((details)=>{
                    return <Card title={details.title} details={details.details} icon={details.icon} />
                })
            }
        </div>

    </div>
  )
}

export default WhyOcen