import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../../redux/actions/videos.action'
import './_categoriesBars.scss'


const keyWords = [
 'All',
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

  const dispatch = useDispatch()


const handleClick = value => {
 setActiveElement(value)
 dispatch(getVideosByCategory(value))
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
