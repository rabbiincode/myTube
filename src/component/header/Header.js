import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineNotifications, MdMic, MdOutlineCreateNewFolder, MdOutlineMenu } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './_header.scss'

const Header = ({toggleSidebar, handleToggleSidebar }) => {
  const [input, setInput] = useState('')
  const photo  = useSelector(state => state.auth?.user)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
  }

  return (
    <div className={`header ${toggleSidebar && 'toggleBackground'}`}>
      <div className='header-1'>
        <div className={`header-menu ${toggleSidebar && 'toggleBackground-menu'}`} onClick = {() => handleToggleSidebar()}>
          <MdOutlineMenu size={30}/>
        </div>

        <div className='header-tube'>
          <Link to="/">
            <img src={'/images/youtube.png'} alt='img' className='header-logo' />
            <span className='header-name'>YouTube</span>
          </Link>
        </div>
      </div>

      <div className="header-search">
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search' value={input} onChange={e => setInput(e.target.value)} />
          <button type='submit'>
            <AiOutlineSearch size={25}/>
          </button>
        </form>
        <button className='mic'><MdMic size={25}/></button>
      </div>

      <div className='header-icons'>
        <span><MdOutlineCreateNewFolder size={25}/></span>
        <span><MdOutlineNotifications size={25}/></span>
        <img
          src={photo?.photoURL}
          alt='avatar'
        />
      </div>
    </div>
  )
}

export default Header