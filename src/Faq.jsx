import React, { useState } from 'react'
import BlueWhale from './../public/BlueWhale.png'

const Collapsible = ({title,desc}) => {
    const [collapse,setCollapse] = useState();
    return <div className='text-white w-full border-b p-4 b-opacity-10 border-opacity-5 mb-5'  >
        <div className='flex justify-between cursor-pointer' onClick={()=>setCollapse(!collapse)} >
            <p className='text-lg' >{title}</p>
            <p>+</p>
        </div>
        {collapse && <div className='mt-10' >
                <p>{desc}</p>
            </div>}
    </div>
}

const Faq = () => {

    const data = [
        {
            title : "How can Oceans Ad Agency help my business scale?",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere beatae quasi ut est consequuntur incidunt asperiores tenetur voluptatem. Facilis autem modi eligendi dolor cumque! Debitis illum odit beatae facilis."
        },
        {
            title : "What industries does Oceans Ad Agency specialize in?",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere beatae quasi ut est consequuntur incidunt asperiores tenetur voluptatem. Facilis autem modi eligendi dolor cumque! Debitis illum odit beatae facilis."
        },
        {
            title : "What results can I expect from your services?",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere beatae quasi ut est consequuntur incidunt asperiores tenetur voluptatem. Facilis autem modi eligendi dolor cumque! Debitis illum odit beatae facilis."
        },
        {
            title : "Can Oceans Ad Agency help with brand growth and visibility?",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere beatae quasi ut est consequuntur incidunt asperiores tenetur voluptatem. Facilis autem modi eligendi dolor cumque! Debitis illum odit beatae facilis."
        },
        {
            title : "What are your pricing models for digital marketing services?",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere beatae quasi ut est consequuntur incidunt asperiores tenetur voluptatem. Facilis autem modi eligendi dolor cumque! Debitis illum odit beatae facilis."
        },
        {
            title : "How do you measure the success of your campaigns?",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere beatae quasi ut est consequuntur incidunt asperiores tenetur voluptatem. Facilis autem modi eligendi dolor cumque! Debitis illum odit beatae facilis."
        },
        {
            title : "Why should I trust Oceans Ad Agency with my business growth?",
            desc : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, facere beatae quasi ut est consequuntur incidunt asperiores tenetur voluptatem. Facilis autem modi eligendi dolor cumque! Debitis illum odit beatae facilis."
        }
    ]

  return (
    <div className='mt-32 py-16 grid place-items-center text-white relative' >
        <img src={BlueWhale} alt="" className='absolute -top-64 right-0' />
        <p className='text-6xl font-bold' >FAQs</p>

        <div className='mt-16 w-[70%]' >
            {data.map((row,index)=>{
                return <Collapsible key={index} title={row.title} desc={row.desc} />
            })}
            
        </div>
    </div>
  )
}

export default Faq