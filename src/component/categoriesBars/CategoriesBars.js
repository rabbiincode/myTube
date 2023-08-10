import React, { useRef, useState } from 'react'
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
  const dispatch = useDispatch()
  const rowRef = useRef(null)
  const [isMovedLeft, setIsMovedLeft] = useState(false)
  const [isMovedRight, setIsMovedRight] = useState(true)
  const [activeElement, setActiveElement] = useState('All')

  const handleScroll = (direction) => {
    setIsMovedLeft(true)
    setIsMovedRight(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current

      let scrollTo = direction === 'left' 
      ? scrollLeft - clientWidth : scrollLeft + clientWidth

      if (scrollTo <= 0){
        // Ensure we don't scroll beyond the left end
        scrollTo = 0;
        setIsMovedLeft(false)
        setIsMovedRight(true)
      }

      if (scrollTo >= scrollWidth - clientWidth){
        // Ensure we don't scroll beyond the right end
        scrollTo = scrollWidth - clientWidth;
        setIsMovedLeft(true)
        setIsMovedRight(false)
      }
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const handleClick = value => {
    setActiveElement(value)
    if (value === 'All') {
      dispatch(getPopularVideos())
    } else{
      dispatch(getVideosByCategory(value))
    }
  }

  return (
    <div className='categoriesBar'>
      <span onClick={() => handleScroll('left')} className={`arrow arrow-left ${!isMovedLeft && 'hide'}`}>&lt;</span>
      <div className='bar' ref={rowRef}>
        {
          keyWords.map((value, i) => (
            <span onClick={() => handleClick(value)} className={activeElement === value ? 'active' : '' } key={i}>
              {value}
            </span>
          ))
        }
      </div>
      <span onClick={() => handleScroll('right')} className={`arrow arrow-right ${!isMovedRight && 'hide'}`}>&gt;</span>
    </div>
  )
}

export default CategoriesBars