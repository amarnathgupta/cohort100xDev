import React from 'react'
import Button from './Button'

function LowerHeadingCard() {
  return (
    <div className='flex flex-col gap-6'>
        <div className='text-xl font-medium'>
            Transactions | This Month
        </div>
        <div className='flex gap-3'>
            <Button title={"Payout"} count={22} />
            <Button title={"Refunds"} count={6} isActive />
        </div>
    </div>
  )
}

export default LowerHeadingCard