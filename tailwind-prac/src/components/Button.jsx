import React from 'react'

function Button({title, count, isActive=false}) {
  return (
    <div className={`py-1.5 px-4 ${isActive ? "bg-blue-light text-white" : "bg-red-100"} rounded-3xl`}>
        {title} {count ? `(${count})` : ""}
    </div>
  )
}

export default Button