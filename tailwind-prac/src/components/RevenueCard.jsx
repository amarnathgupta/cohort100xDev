import React from 'react'

function RevenueCard({title, amount, count, className, isActive=false}) {
  return (
    <div className={`${isActive? "bg-blue-light hover:bg-blue-dark overflow-hidden" : "bg-white"} h-max rounded-xl shadow-md cursor-pointer ${className}`}>
        <div className='flex flex-col gap-4 p-5'>
            <div className={`flex items-center ${isActive? "text-white" : "text-grey-primary"} gap-2 text-base`}>
                <div className='flex justify-start '>
                    {title} 
                </div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>

                </div>
            </div>
            <div className='flex justify-between'>
                <div className={`font-semibold text-3xl ${isActive? "text-white" : "text-black"}`}>
                    ₹{amount}
                </div>
                {count ? (<div 
                className={`flex items-center ${isActive? "text-white" : "text-blue-light"} underline text-base cursor-pointer`}>
                    {count} orders 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>): null}
            </div>
        </div>
        <div className={`flex justify-between ${isActive ? "" : "hidden"} text-white rounded-xl bg-blue-dark px-5 py-2`}>
                    <div>
                        Next Payout Date:
                    </div>
                    <div>
                        Today, 4:00PM
                    </div>
        </div>
    </div>
    
  )
}

export default RevenueCard