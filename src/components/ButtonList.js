import React from 'react'
import Buttons from './Buttons'

const ButtonList = () => {
  const list = ["All","Music","Mixes","Live","Computer Science", "Tests","News", "Games","Comedy","Defence","Bollywood Music","Watched","Nature","Lectrues","Recently Uploaded"];
  return (
    <div className='flex'>
      {list.map((name,index)=>(<Buttons key= {index}name={name}/>))}

    </div>
  )
}

export default ButtonList