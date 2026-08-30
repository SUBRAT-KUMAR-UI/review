import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
        <div className='w-52 bg-zinc-200 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-[50%] rounded-md'>
            <div className='w-full h-32 bg-zinc-300'>
                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1hem9ufGVufDB8fDB8fHww' alt='' />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>Amazon basics</h2>
                <p className='text-xs mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nam quaerat optio!</p>
            </div>
        </div>
    </div>

  )
}

export default Card