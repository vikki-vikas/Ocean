import React from 'react'

const Card = ({title,logo}) => {
    return <div className='place-items-center flex items-center justify-center gap-2 mx-16 min-w-max' >
        <img src={logo} alt="" className='w-10 h-10 rounded' />
        <p className='text-white' >{title}</p>
    </div>
}

const Carosule = () => {

    const dataLine1 = [
        {
            img : "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
            title : "Figma"
        },
        {
            img : "https://cdn.pixabay.com/photo/2021/02/03/12/28/adobe-illustrator-5977785_1280.png",
            title : "Adobe-illustrator"
        },
        {
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
            title : "Indesign"
        },
        {
            img : "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
            title : "Figma"
        },
        {
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
            title : "Indesign"
        },
        {
            img : "https://cdn.pixabay.com/photo/2021/02/03/12/28/adobe-illustrator-5977785_1280.png",
            title : "Adobe-illustrator"
        },
        {
            img : "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
            title : "Figma"
        },
        {
            img : "https://cdn.pixabay.com/photo/2021/02/03/12/28/adobe-illustrator-5977785_1280.png",
            title : "Adobe-illustrator"
        },
        {
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
            title : "Indesign"
        },
        {
            img : "https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format",
            title : "Figma"
        },
        {
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
            title : "Indesign"
        },
        {
            img : "https://cdn.pixabay.com/photo/2021/02/03/12/28/adobe-illustrator-5977785_1280.png",
            title : "Adobe-illustrator"
        },

    ]

    const dataLine2 = [
        {
            img : "https://cocosolution.com/cms/uploads/o_1ebo7h0gt11ee3i7j764evn52a.jpg",
            title : "Google Tag Manager"
        },
        {
            img : "https://yt3.googleusercontent.com/ytc/AIdro_nvBz7NqQm8DcjhnnbdPubaNq9Q8zKwPi49pElthZdU8r2Z=s900-c-k-c0x00ffffff-no-rj",
            title : "Google Analutics"
        },
        {
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcyB24Z5_lwzqr198_SmswSd0sUMi_YnP9IHhDlEBiWT9iU-gN2Zev3zfoOhDLwvqnrs&usqp=CAU",
            title : "Hubspot"
        },
        {
            img : "https://cocosolution.com/cms/uploads/o_1ebo7h0gt11ee3i7j764evn52a.jpg",
            title : "Google Tag Manager"
        },
        {
            img : "https://yt3.googleusercontent.com/ytc/AIdro_nvBz7NqQm8DcjhnnbdPubaNq9Q8zKwPi49pElthZdU8r2Z=s900-c-k-c0x00ffffff-no-rj",
            title : "Google Analutics"
        },
        {
            img : "https://cocosolution.com/cms/uploads/o_1ebo7h0gt11ee3i7j764evn52a.jpg",
            title : "Google Tag Manager"
        },
    ]

    const dataLine3 = [
        {
            img : "https://static.vecteezy.com/system/resources/previews/004/201/564/non_2x/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
            title : "Meta"
        },
        {
            img : "https://lh3.googleusercontent.com/mlUCKwnX9GvxtFmeqFCk93FlpM-fmMwUdrl31sP3Z2m8n6Kxy35Y9ln39dHTtuTbi0VW2mJ3rNbPKBfGqhR9fcrGO4I53vjBkk9jU9YZS_gevtedjDA",
            title : "Google My Business"
        },
        {
            img : "https://yt3.googleusercontent.com/B4aoQ5O4MYcvhfd7yBHl1dROjUuf58xQaWsp4Ixrl8PknRFzGkxFdkUdeFX2PbLlaJDsBDzq=s900-c-k-c0x00ffffff-no-rj",
            title : "Notion"
        },
        {
            img : "https://lh3.googleusercontent.com/mlUCKwnX9GvxtFmeqFCk93FlpM-fmMwUdrl31sP3Z2m8n6Kxy35Y9ln39dHTtuTbi0VW2mJ3rNbPKBfGqhR9fcrGO4I53vjBkk9jU9YZS_gevtedjDA",
            title : "Google My Business"
        },
        {
            img : "https://static.vecteezy.com/system/resources/previews/004/201/564/non_2x/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
            title : "Meta"
        },
        {
            img : "https://lh3.googleusercontent.com/mlUCKwnX9GvxtFmeqFCk93FlpM-fmMwUdrl31sP3Z2m8n6Kxy35Y9ln39dHTtuTbi0VW2mJ3rNbPKBfGqhR9fcrGO4I53vjBkk9jU9YZS_gevtedjDA",
            title : "Google My Business"
        },
        {
            img : "https://yt3.googleusercontent.com/B4aoQ5O4MYcvhfd7yBHl1dROjUuf58xQaWsp4Ixrl8PknRFzGkxFdkUdeFX2PbLlaJDsBDzq=s900-c-k-c0x00ffffff-no-rj",
            title : "Notion"
        },
        {
            img : "https://lh3.googleusercontent.com/mlUCKwnX9GvxtFmeqFCk93FlpM-fmMwUdrl31sP3Z2m8n6Kxy35Y9ln39dHTtuTbi0VW2mJ3rNbPKBfGqhR9fcrGO4I53vjBkk9jU9YZS_gevtedjDA",
            title : "Google My Business"
        },
    ]

  return (
    <div className='pt-32 px-4' >

       <div className='flex overflow-x-clip' >
            {dataLine1.map((row,index)=>{
            return <Card title={row.title} logo={row.img} key={index} />
            })}
       </div>
       <div className='flex overflow-x-clip mt-14' >
            {dataLine2.map((row,index)=>{
            return <Card title={row.title} logo={row.img} key={index} />
            })}
       </div>
       <div className='flex overflow-x-clip mt-14' >
            {dataLine3.map((row,index)=>{
            return <Card title={row.title} logo={row.img} key={index} />
            })}
       </div>
    
    </div>
  )
}

export default Carosule