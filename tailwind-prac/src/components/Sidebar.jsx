import React from 'react'
import Intro from './Intro'
import SidePage from './SidePage'
import BaseSideNavButton from './BaseSideNavButton'

function Sidebar() {
  return (
    <div className='bg-[#1E2640] h-full w-full text-white py-4 px-2.5 flex flex-col justify-between gap-4'>
         <div className='flex flex-col gap-6'>
            <Intro />
            <SidePage />
         </div>
         <BaseSideNavButton />
    </div>
  )
}

export default Sidebar