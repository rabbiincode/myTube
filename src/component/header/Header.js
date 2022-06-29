import React, { useState } from 'react'
import './_header.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdOutlineNotifications, MdOutlineApps, MdMic, MdOutlineCreateNewFolder } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ({handleToggleSidebar}) => {

  const [input, setInput] = useState('')

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`/search/${input}`)
  }

  const photo  = useSelector(state=>state.auth?.user)

 return (
  <div className='header'>
    <div className='header-1'>

      <div className="header-hamburger" onClick = { () => handleToggleSidebar() }>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>

      <div className='header-tube'>
        <img
         src={'/images/logo1.png'} 
         alt='myTube'
         className='header-logo'
        />
        YouTube
      </div>

    </div>

   <div className="header-search">
     <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search' value={input} onChange={e=>setInput(e.target.value)}/>
        <button type='submit'>
          <AiOutlineSearch size={25}/>
        </button>
     </form>
     <MdMic className='mic' size={28}/>
   </div>

    <div className='header-icons'>
      <MdOutlineCreateNewFolder size={28}/>
      <MdOutlineApps size={28}/>
      <MdOutlineNotifications size={28}/>
      <img
        src={photo?.photoURL}
        alt='avartar'
      />
    </div>

  </div>
 )
}

export default Header
