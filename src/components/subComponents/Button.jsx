import React from 'react'

function Button({children, shadow, bgColor, txtColor}) {
  return (
    <a href='#' className={`font-semibold bg-${bgColor} px-6 min-h-10 flex items-center justify-center rounded-lg text-${txtColor}`}>
        {children}
    </a>
  )
}

export default Button;