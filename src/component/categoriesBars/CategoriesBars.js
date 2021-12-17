import React, { useState } from 'react'
import './_categoriesBars.scss'


const keyWords = [
 'music',
 'ultimate',
 'hope',
 'life',
 'going',
 'coming',
 'leaving',
 'left',
 'leave',
 'come',
]
const CategoriesBars = () => {
const [activeElement, setActiveElement] = useState('All')

const handleClick = value => {
 setActiveElement(value)
}

 return (
  <div className='categoriesBar'>
   {
    keyWords.map((value, i) => (
    <span 
      onClick={()=> handleClick(value)} 
      className={activeElement === value ? 'active' : '' }
      key={i}>
      {value}
    </span>
    ))}
  </div>
 )
}

export default CategoriesBars
