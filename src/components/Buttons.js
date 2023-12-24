import React from 'react'
const Buttons = ({name}) => {
  return (
    <div className='bg-gray-200 px-3 py-2 rounded-lg mx-2 font-extrabold text-gray-800 text-base hover:cursor-pointer hover:bg-gray-300'>{name}</div>
    
  )
}

export default Buttons