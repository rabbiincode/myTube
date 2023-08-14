import React from 'react'
import {
  MdOutlineSubscriptions, MdExitToApp, MdOutlineThumbUp,
  MdOutlineVideoLibrary, MdHomeFilled, MdOutlineMusicNote,
  MdOutlineWatchLater, MdOutlineBook, MdShortText, MdHistory,
  MdOutlineFireplace, MdOutlineGamepad, MdOutlineSports, MdOutlineSettings,
  MdOutlineFlag, MdOutlineFeedback, MdOutlineAddCircleOutline, MdOutlineHelpOutline
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { MdOutlineMenu } from 'react-icons/md'
import './_sidebar.scss'

const Sidebar = ({ toggleSidebar, hideSidebar, showSidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch()
  const logOutHandler = () => dispatch(logOut())
  const display = !hideSidebar ? 'show' : (!showSidebar ? 'hide' : 'sidebar')

  return (
    <nav className={`sidebar ${toggleSidebar && 'active-' + display} ${hideSidebar && 'hideSidebar'}`}>
      <div className=' sidebar-header'>
        <div className="sidebar-header-menu" onClick = {() => handleToggleSidebar()}>
          <MdOutlineMenu className='icon'/>
        </div>

        <div className='sidebar-header-tube'>
          <Link to="/">
            <img src={'/images/youtube.png'} alt='img'/>
            <span className='sidebar-header-name'>YouTube</span>
          </Link>
        </div>
      </div>

      <SimpleBar style={{ maxHeight: '100%' }} className='sidebar-list'>
        <Link to='/'>
          <li>
            <MdHomeFilled className='icon'/>
            <span>Home</span>
          </li>
        </Link>

        <li>
          <MdShortText className='icon'/>
          <span>Shorts</span>
        </li>

        <Link to='/feed/subscriptions'>
          <li>
            <MdOutlineSubscriptions className='icon'/>
            <span className='subscribe'>Subscriptions</span>
          </li>
        </Link>

        <hr className='first'/>
   
        <li>
          <MdOutlineVideoLibrary className='icon'/>
          <span>Library</span>
        </li>

        <li className='none'>
          <MdHistory className='icon'/>
          <span>History</span>
        </li>

        <li className='none'>
          <MdOutlineWatchLater className='icon'/>
          <span>Watch later</span>
        </li>

        <li className='none'>
          <MdOutlineThumbUp className='icon'/>
          <span>Liked Videos</span>
        </li>
 
        <hr/>

        <li className='sub none'>
          <span>Subscriptions</span>
        </li>

        <li className='none'>
          <MdOutlineAddCircleOutline className='icon'/>
          <span>Browse channels</span>
        </li>

        <hr/>

        <li className='sub none'>
          <span>Explore</span>
        </li>

        <li className='none'>
          <MdOutlineFireplace className='icon'/>
          <span>Trending</span>
        </li>

        <li className='none'>
          <MdOutlineMusicNote className='icon'/>
          <span>Music</span>
        </li>

        <li className='none'>
          <MdOutlineGamepad className='icon'/>
          <span>Gaming</span>
        </li>

        <li className='none'>
          <MdOutlineBook className='icon'/>
          <span>News</span>
        </li>
 
        <li className='none'>
          <MdOutlineSports className='icon'/>
          <span>Sports</span>
        </li>

        <hr/>

        <li onClick={logOutHandler}>
          <MdExitToApp className='icon'/>
          <span>LogOut</span>
        </li>

        <hr/>

        <li className='sub none'>
          <span>More From YouTube</span>
        </li>

        <li className='none'>
          <img src='/images/youtube.png' alt='img' className='icon-1'/>
          <span>YouTube Premium</span>
        </li>

        <li className='none'>
          <img src='/images/youtube-music.png' alt='img' className='icon-1'/>
          <span>YouTube Music</span>
        </li>

        <li className='none'>
          <img src='/images/youtube-kids.png' alt='img' className='icon-1'/>
          <span>YouTube Kids</span>
        </li>

        <hr/>

        <li className='none'>
          <MdOutlineSettings className='icon'/>
          <span>Settings</span>
        </li>
   
        <li className='none'>
          <MdOutlineFlag className='icon'/>
          <span>Report history</span>
        </li>

        <li className='none'>
          <MdOutlineHelpOutline className='icon'/>
          <span>Help</span>
        </li>

        <li className='none'>
          <MdOutlineFeedback className='icon'/>
          <span>Send feedback</span>
        </li>

        <hr/>

        <div className='more none'>
          <p>About Press Copyright<br/>Contact us Creators<br/>Advertise Developer</p>
          <p>Terms Privacy Policy & Safety<br/>How YouTube works<br/>Test new features</p>
          <p className='copyright'>&copy; {new Date().getFullYear()} Google LLC</p>
        </div>
      </SimpleBar>
    </nav>
  )
}

export default Sidebar