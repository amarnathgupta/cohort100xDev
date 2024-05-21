import React from 'react'
import ButtonSecondary from './ButtonSecondary'

function Paybar() {
  return (
    <div className='flex justify-between items-center'>
        <div className='text-black font-semibold text-xl'>Overview</div>
        <ButtonSecondary title={"This Month"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
} />
    </div>
  )
}

export default Paybar