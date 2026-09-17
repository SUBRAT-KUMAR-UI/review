import React from 'react'

function Card() {
    const data = [
        {name: "Mahiya Ve",description:"The name of the card that will be displayed"},
        {name: "Junoon",description:"The name of the card that will be displayed"},
    ];

  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col gap-10 justify-center items-center'>
        {data.map((item,index)=>(
           <div className='w-90 px-3 py-2 bg-zinc-100 rounded-md'>
            <h3 className='font-semibold text-xl'>{item.name}</h3>
            <p className='text-xs mt-2'>{item.description}</p>
            <button onClick={() => {alert("Download initiated!")}} className='px-4 py-3 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3'>Download Now</button>
        </div>   
        ))}
    </div>
  )
}

export default Card