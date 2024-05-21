import React from 'react'
import LowerHeadingCard from './LowerHeadingCard'
import LowerDetails from './LowerDetails'

function Lower() {
  return (
    <div className='flex flex-col gap-8'>
        <LowerHeadingCard />
        <LowerDetails />
    </div>
  )
}

export default Lower