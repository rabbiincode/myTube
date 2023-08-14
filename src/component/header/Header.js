import React, { useState } from 'react'
import { MdMic, MdOutlineMenu, MdOutlineNotifications, MdOutlineCreateNewFolder, MdOutlineSearch } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './_header.scss'

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState('')
  const photo = useSelector(state => state.auth?.user)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
  }

  return (
    <div className="header">
      <div className='header-1'>
        <div className='header-menu' onClick = {() => handleToggleSidebar()}>
          <MdOutlineMenu className='icon'/>
        </div>

        <div className='header-tube'>
          <Link to="/">
            <img src={'/images/youtube.png'} alt='img'/>
            <span className='header-name'>YouTube</span>
          </Link>
        </div>
      </div>

      <div className="header-search">
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search' value={input} onChange={e => setInput(e.target.value)} />
          <button type='submit'>
            <MdOutlineSearch className='icon'/>
          </button>
        </form>
        <button className='search'><MdOutlineSearch className='icon'/></button>
        <button className='mic'><MdMic className='icon'/></button>
      </div>

      <div className='header-icons'>
        <span><MdOutlineCreateNewFolder className='icon'/></span>
        <span><MdOutlineNotifications className='icon'/></span>
        <img
          src={photo?.photoURL}
          alt='avatar'
        />
      </div>
    </div>
  )
}

export default Header