import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
import './_categoriesBars.scss'


const keyWords = [
 'All',
 'Music',
 'Comedy',
 'Sports',
 'Technologies',
 'FC Barcelona',
 'World Cup',
 'Martial arts',
 'Politics',
 'Health',
 'News',
 'Contemporary Worship Music',
 'Auditions',
 'Playlists',
 'Recently uploaded',
 'New to you'
]
const CategoriesBars = () => {
  const [activeElement, setActiveElement] = useState('All')

  const dispatch = useDispatch()

const handleClick = value => {
 setActiveElement(value)
 if (value === 'All') {
   dispatch(getPopularVideos())
 } else {
   dispatch(getVideosByCategory(value))
}
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
