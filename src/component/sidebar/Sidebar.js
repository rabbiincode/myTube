import React, {useEffect, useState} from 'react'
import {
  MdOutlineSubscriptions, MdExitToApp, MdHistory,
  MdOutlineVideoLibrary, MdHomeFilled, MdOutlineThumbUp,
  MdOutlineWatchLater, MdOutlineBook, MdOutlineMusicNote,
  MdOutlineFireplace, MdOutlineGamepad, MdOutlineSports, MdOutlineSettings,
  MdOutlineFlag, MdOutlineFeedback, MdOutlineAddCircleOutline, MdOutlineHelpOutline
} from 'react-icons/md'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { useDispatch } from 'react-redux'
import { MdOutlineMenu } from 'react-icons/md'
import { logOut } from '../../redux/actions/auth.action'
import './_sidebar.scss'

const Sidebar = ({ toggleSidebar, hideSidebar, showSidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch()
  const logOutHandler = () => dispatch(logOut())
  const display = !hideSidebar ? 'show' : (!showSidebar ? 'hide' : 'sidebar')
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const toggle = viewportWidth <= 768

  useEffect(() => {
    // Update the viewport width state when the window is resized
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`sidebar ${toggleSidebar && 'active-' + display} ${hideSidebar && 'hideSidebar'}`}>
      <div>
        <div className=' sidebar-header'>
          <div className="sidebar-header-menu" onClick = {() => handleToggleSidebar()}>
            <MdOutlineMenu size={25}/>
          </div>

          <div className='sidebar-header-tube' onClick = {() => toggle && handleToggleSidebar()}>
            <Link to="/">
              <img src={'/images/youtube.png'} alt='img'/>
              <span className='sidebar-header-name'>YouTube</span>
            </Link>
          </div>
        </div>

        <SimpleBar style={{ maxHeight: '100%' }} className='sidebar-list'>
          <Link to='/'>
            <li onClick = {() => toggle && handleToggleSidebar()}>
              <MdHomeFilled size={24}/>
              <span>Home</span>
            </li>
          </Link>

          <li onClick = {() => toggle && handleToggleSidebar()}>
            <img src='/images/youtube-shorts.png' alt='img' className='icon-1'/>
            <span>Shorts</span>
          </li>

          <Link to='/'>
            <li onClick = {() => toggle && handleToggleSidebar()}>
              <MdOutlineSubscriptions size={24}/>
              <span className='subscribe'>Subscriptions</span>
            </li>
          </Link>

          <hr className='first'/>
   
          <li onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineVideoLibrary size={24}/>
            <span>Library</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdHistory size={24}/>
            <span>History</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineWatchLater size={24}/>
            <span>Watch later</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineThumbUp size={24}/>
            <span>Liked Videos</span>
          </li>
 
          <hr/>

          <li className='sub none'>
            <span>Subscriptions</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineAddCircleOutline size={24}/>
            <span>Browse channels</span>
          </li>

          <hr/>

          <li className='sub none'>
            <span>Explore</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineFireplace size={24}/>
            <span>Trending</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineMusicNote size={24}/>
            <span>Music</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineGamepad size={24}/>
            <span>Gaming</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineBook size={24}/>
            <span>News</span>
          </li>
 
          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineSports size={24}/>
            <span>Sports</span>
          </li>

          <hr/>

          <li onClick={logOutHandler}>
            <MdExitToApp size={24}/>
            <span>LogOut</span>
          </li>

          <hr/>

          <li className='sub none'>
            <span>More From YouTube</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <img src='/images/youtube-1.png' alt='img' className='icon-1'/>
            <span>YouTube Premium</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <img src='/images/youtube-music.png' alt='img' className='icon-1'/>
            <span>YouTube Music</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <img src='/images/youtube-kids.png' alt='img' className='icon-1'/>
            <span>YouTube Kids</span>
          </li>

          <hr/>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineSettings size={24}/>
            <span>Settings</span>
          </li>
   
          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineFlag size={24}/>
            <span>Report history</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineHelpOutline size={24}/>
            <span>Help</span>
          </li>

          <li className='none' onClick = {() => toggle && handleToggleSidebar()}>
            <MdOutlineFeedback size={24}/>
            <span>Send feedback</span>
          </li>

          <hr/>

          <div className='more none'>
            <p>About Press Copyright<br/>Contact us Creators<br/>Advertise Developer</p>
            <p>Terms Privacy Policy & Safety<br/>How YouTube works<br/>Test new features</p>
            <p className='copyright'>&copy; {new Date().getFullYear()} Google LLC</p>
          </div>
        </SimpleBar>
      </div>
      <div className='transparent-bg' onClick = {() => handleToggleSidebar()}></div>
    </nav>
  )
}

export default Sidebar