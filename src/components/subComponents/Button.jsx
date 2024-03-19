import React from 'react'

function Button({children, shadow, hasBorder, bgColor, txtColor}) {
  return (
    <a href='#' className={`font-semibold py-2 px-6 border-2 ${shadow && "shadow-lg"} ${hasBorder ? "border-shadesshades-4" : "border-current"} min-h-10 flex items-center justify-center rounded-lg ${txtColor} ${bgColor}`}>
        {children}
    </a>
  )
}

export default Button;