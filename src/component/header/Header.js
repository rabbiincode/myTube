import React from 'react'
import './_header.scss'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

const Header = ({handleToggleSidebar}) => {
 return (
  <div className='border border-dark header'>
   <FaBars className='header-menu' size={26}
     onClick={ () => handleToggleSidebar()}
   />

  <img
     src={'/images/logo1.png'} 
     alt='myTube'
     className='header-logo'
  />

  <form>
   <input type='text' placeholder='Search'/>
   <button type='submit'>
    <AiOutlineSearch size={22}/>
   </button>
  </form>

  <div className='header-icons'>
   <MdNotifications size={28}/>
   <MdApps size={28}/>
   <img
     src={'/images/person.png'}
     alt='your picture'
   />
  </div>
  </div>
 )
}

export default Header
