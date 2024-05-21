import React from 'react'

function Intro() {
  return (
    <div className='flex w-full items-center justify-around gap-3 hover:bg-opacity-25 hover:bg-white px-2 py-3 rounded-md cursor-pointer'>
        <div className=' flex gap-3'>
            <div className='bg-white text-black text-xl font-bold flex justify-center items-center px-4 py-2 rounded-sm'>
                D
            </div>
            <div className='flex flex-col'>
            <div className='font-semibold'>Don Chandu</div>
            <div className='hover:underline'>
                Visit Store
            </div>
        </div>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
        </div>
    </div>
  )
}

export default Intro