import { useState } from 'react'
import Paybar from './Paybar'
import RevenueCard from './RevenueCard'

function PayWindow() {

  return (
    <div className='flex gap-7 flex-col pt-16'>
      <Paybar />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        <RevenueCard className="col-span-1" title="Next Payout" amount="2,312.23" count={23} isActive/>
        <RevenueCard className="col-span-1" title="Amount Pending" amount="92,312.20" count={13} />
        <RevenueCard className="col-span-1 sm:col-span-2 lg:col-span-1" title="Amount Processed" amount="23,92312.19" count={0} />
      </div>
    </div>
  )
}

export default PayWindow
