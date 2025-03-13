import React from 'react'
import Seahorse from './../public/Seahorse.png'
import octopus from './../public/octopus.png'

const ProvenResults = () => {

    const tableData = [
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
        {
          type : 'Dental Clinics',
          reach : '9 lakh+',
          clicks : '1 lakh+',
          leads : '10,000+',
          patientsFlow : '200%',
          roi : '15x'
        },
      ]
      
  return (
  <div className='py-10 grid place-items-center mt-10 relative mb-48' >
    <img src={Seahorse} width={300} alt="" className='absolute left-0 top-0 z-0' />
    <img src={octopus} width={700} alt="" className='absolute -right-0 -bottom-40 z-0' />
    <div className='w-1/2 text-white' >
      <p className='text-center text-6xl font-bold' >Our proven results</p>
      <p className='text-center mt-4' >Wve deliver proven results across the healthcare industry. From driving 15X ROI for Dental Clinics to achieving 210% patient flow for Multi-Speciality Hospitals, our data-driven strategies ensure high-impact growth. Whether you're a clinic or a hospital, we tailor campaigns that maximize reach, leads, and ROI. Let’s make your healthcare business 
      thrive with results that speak for themselves</p>
    </div>
    <div className='w-[70%]  p-6 border-8 rounded-2xl bg-white mt-12 z-10' >
      <table className='w-full' >
        <thead>
          <tr>
            <th className='text-left py-4' >Business Type</th>
            <th className='text-left py-4' >Reach</th>
            <th className='text-left py-4' >Clicks</th>
            <th className='text-left py-4' >Leads</th>
            <th className='text-left py-4' >Patients Flow</th>
            <th className='text-left py-4' >ROI up to</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row,index)=>{
            return  <tr key={index} className='py-10' >
                <td className='py-4' >{row.type}</td>
                <td className='py-4' >{row.reach}</td>
                <td className='py-4' >{row.clicks}</td>
                <td className='py-4' >{row.leads}</td>
                <td className='py-4' >{row.patientsFlow}</td>
                <td className='py-4' >{row.roi}</td>
            </tr>
          })}

        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ProvenResults