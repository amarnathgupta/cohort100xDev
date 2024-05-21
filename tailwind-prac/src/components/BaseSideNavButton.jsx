import React from 'react'

function BaseSideNavButton() {
  return (
    <div className='rounded-md py-1.5 px-3 gap-2.5 bg-white bg-opacity-20'>
        <div className='flex items-center gap-3'>
            <div className='bg-white bg-opacity-20 rounded-sm p-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
            </div>
            <div className='flex flex-col gap-0.5'>
                <div className='font-thin'>
                    Available Credits
                </div>
                <div className='font-semibold'>
                    222.10
                </div>
            </div>
        </div>
    </div>
  )
}

export default BaseSideNavButton