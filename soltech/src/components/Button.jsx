import React from 'react'

const Button = (props) => {
    const { 
        title, 
        id, 
        rightIcon, 
        leftIcon, 
        containerClass,
        backgroundColor,
        href
    } = props
  return (
    <div id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full ${backgroundColor ? backgroundColor : 'bg-violet-50'} px-7 py-3 text-black ${containerClass}`}>
        <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
            <a href={href}>
                {title}
            </a>
            
        </span>
        {rightIcon}
    </div>
  )
}

export default Button