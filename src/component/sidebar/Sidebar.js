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
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'
import './_sidebar.scss'

const Sidebar = ({ toggleSidebar, hideSidebar, showSidebar }) => {
  const display = !hideSidebar ? 'show' : (!showSidebar ? 'hide' : 'sidebar')
  const dispatch = useDispatch()
  const logOutHandler = () => {
    dispatch(logOut())
  }
  console.log(display)

  return (
    <nav className={`sidebar ${toggleSidebar && 'active-' + display} ${hideSidebar && 'hideSidebar'}`}>
      <SimpleBar style={{ maxHeight: '100%' }}>
        <Link to='/'>
          <li className='home'>
            <MdHomeFilled size={23}/>
            <span>Home</span>
          </li>
        </Link>

        <li>
          <MdShortText size={23}/>
          <span>Shorts</span>
        </li>

        <Link to='/feed/subscriptions'>
          <li>
            <MdOutlineSubscriptions size={23}/>
            <span className='subscribe'>Subscriptions</span>
          </li>
        </Link>

        <hr className='first'/>
   
        <li>
          <MdOutlineVideoLibrary size={23}/>
          <span>Library</span>
        </li>

        <li className='none'>
          <MdHistory size={23}/>
          <span>History</span>
        </li>

        <li className='none'>
          <MdOutlineWatchLater size={23}/>
          <span>Watch later</span>
        </li>

        <li className='none'>
          <MdOutlineThumbUp size={23}/>
          <span>Liked Videos</span>
        </li>
 
        <hr/>

        <li className='none'>
          <span className='sub'>Subscriptions</span>
        </li>

        <li className='none'>
          <MdOutlineAddCircleOutline size={23}/>
          <span>Browse channels</span>
        </li>

        <hr/>

        <li className='none'>
          <span className='sub'>Explore</span>
        </li>

        <li className='none'>
          <MdOutlineFireplace size={23}/>
          <span>Trending</span>
        </li>

        <li className='none'>
          <MdOutlineMusicNote size={23}/>
          <span>Music</span>
        </li>

        <li className='none'>
          <MdOutlineGamepad size={23}/>
          <span>Gaming</span>
        </li>

        <li className='none'>
          <MdOutlineBook size={23}/>
          <span>News</span>
        </li>
 
        <li className='none'>
          <MdOutlineSports size={23}/>
          <span>Sports</span>
        </li>

        <hr/>

        <li onClick={logOutHandler}>
          <MdExitToApp size={23}/>
          <span>LogOut</span>
        </li>

        <hr/>

        <li className='none'>
          <span className='sub'>More From YouTube</span>
        </li>

        <li className='none'>
          <img src='/images/youtube.png' alt='img' />
          <span>YouTube Premium</span>
        </li>

        <li className='none'>
          <img src='/images/youtube-music.png' alt='img' />
          <span>YouTube Music</span>
        </li>

        <li className='none'>
          <img src='/images/youtube-kids.png' alt='img' />
          <span>YouTube Kids</span>
        </li>

        <hr/>

        <li className='none'>
          <MdOutlineSettings size={23}/>
          <span>Settings</span>
        </li>
   
        <li className='none'>
          <MdOutlineFlag size={23}/>
          <span>Report history</span>
        </li>

        <li className='none'>
          <MdOutlineHelpOutline size={23}/>
          <span>Help</span>
        </li>

        <li className='none'>
          <MdOutlineFeedback size={23}/>
          <span>Send feedback</span>
        </li>

        <hr/>

        <div className='more none'>
          <p>About Press Copyright<br/>Contact us Creators<br/>Advertise Developer</p>
          <p>Terms Privacy Policy & Safety<br/>How YouTube works<br/>Test new features</p>
          <p className='copyright'>&copy; Google LLC</p>
        </div>
      </SimpleBar>
    </nav>
  )
}

export default Sidebar