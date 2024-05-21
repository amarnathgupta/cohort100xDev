import React from 'react'

function ButtonSecondary({title, icon}) {
  return (
    <div className='border border-slate-400 rounded flex gap-2 px-3 py-2 items-center text-grey-primary cursor-pointer'>
        <div>
            {title}
        </div>
        <div className=' text-sm'>
            {icon}
        </div>
    </div>
  )
}

export default ButtonSecondary