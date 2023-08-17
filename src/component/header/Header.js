import React, { useState } from 'react'
import { MdMic, MdOutlineMenu, MdOutlineNotifications, MdOutlineCreateNewFolder, MdOutlineSearch, MdOutlineClose } from 'react-icons/md'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './_header.scss'

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState('')
  const [show, setShow] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const photo = useSelector(state => state.auth?.user)
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
  }

  const blurInput = () => {
    setShow(false)
    setShowForm(false)
  }

  return (
    <div className="header">
      <div className='header-1'>
        <div className='header-menu' onClick = {() => handleToggleSidebar()}>
          <MdOutlineMenu size={25}/>
        </div>

        <div className={`header-tube ${showForm && 'hide-logo'}`}>
          <Link to="/">
            <img src={'/images/youtube.png'} alt='img'/>
            <span className='header-name'>YouTube</span>
          </Link>
        </div>
      </div>

      <div className={`header-search ${showForm && 'add-width'}`}>
        <form onSubmit={handleSubmit} className={`${showForm && 'show-form'}`}>
          <span className={`button-1 ${show && 'show-button'}`}>
            <MdOutlineSearch className='icon-1'/>
          </span>
          <input type='text' value={input} onChange={e => setInput(e.target.value)}
            placeholder='Search' onFocus={() => setShow(true)} onBlur={() => blurInput()}
          />
          <span className={`button-2 ${input && 'show-button'}`} onClick={() => setInput('')}>
            <MdOutlineClose className='icon-1'/>
          </span>
          <button type='submit'>
            <MdOutlineSearch className='search-bar-icon'/>
          </button>
        </form>
        <button className={`search ${showForm && 'hide-icon'}`} onClick={() => setShowForm(true)}><MdOutlineSearch className='icon-1'/></button>
        <button className={`mic ${showForm && 'hide-icon'}`}><MdMic className='icon-1'/></button>
      </div>

      <div className='header-icons'>
        <span><MdOutlineCreateNewFolder className='icon-1'/></span>
        <span><MdOutlineNotifications className='icon-1'/></span>
        <img
          src={photo?.photoURL}
          alt='avatar'
        />
      </div>
    </div>
  )
}

export default Header