import React from 'react'
import './_sidebar.scss'

import{
 MdOutlineSubscriptions, MdExitToApp, MdOutlineThumbUp, MdHistory,
 MdOutlineLibraryBooks, MdHome, MdOutlineExplore, MdShortText, 
 MdOutlineWatchLater, MdOutlineLibraryMusic, MdOutlineSports,
 MdOutlineGamepad, MdOutlineBook, MdTextRotationAngledown,
 MdSportsBar, MdLiveTv, MdCloudUpload, MdOutlineSettings,
 MdOutlineFlag, MdOutlineHelp, MdOutlineFeedback
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/actions/auth.action'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css'


const Sidebar = ({ sidebar, handleToggleSidebar }) => {

  const dispatch = useDispatch()
  const logOutHandler = () => {
    dispatch(logOut())
  }

 return (
  <nav className={sidebar ? 'sidebar open' : 'sidebar'}
    onClick={ () => handleToggleSidebar(false) }
  >
    <SimpleBar style={{ maxHeight: '100%' }}>

   <Link to='/'>
     <li>
      <MdHome size={23}/>
      <span>Home</span>
     </li>
   </Link>

   <li>
    <MdOutlineExplore size={23}/>
    <span>Explore</span>
   </li>

   <li>
    <MdShortText size={23}/>
    <span>Shorts</span>
   </li>

   <Link to='/feed/subscriptions'>
     <li>
      <MdOutlineSubscriptions size={23}/>
      <span>Subscriptions</span>
     </li>
   </Link>

   <hr/>
   
   <li>
    <MdOutlineLibraryBooks size={23}/>
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
    <span className='sub'>SUBSCRIPTIONS</span>
   </li>

   <li className='none'>
    <MdOutlineLibraryMusic size={23}/>
    <span>Music</span>
   </li>
   
   <li className='none'>
    <MdOutlineSports size={23}/>
    <span>Sports</span>
   </li>

   <li className='none'>
    <MdOutlineGamepad size={23}/>
    <span>Gaming</span>
   </li>

   <li className='none'>
    <MdOutlineBook size={23}/>
    <span>News</span>
   </li>

   <hr/>

    <li onClick={logOutHandler}>
     <MdExitToApp size={23}/>
     <span>Log Out</span>
    </li>

   <hr/>


   <li className='none'>
    <span className='more'>MORE FROM YOUTUBE</span>
   </li>

   <li className='none'>
    <MdTextRotationAngledown size={23}/>
    <span>YouTube Premium</span>
   </li>
   
   <li className='none'>
    <MdSportsBar size={23}/>
    <span>Gaming</span>
   </li>

   <li className='none'>
    <MdLiveTv size={23}/>
    <span>Live</span>
   </li>

   <li className='none'>
    <MdCloudUpload size={23}/>
    <span>Sports</span>
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
    <MdOutlineHelp size={23}/>
    <span>Help</span>
   </li>

   <li className='none'>
    <MdOutlineFeedback size={23}/>
    <span>Send feedback</span>
   </li>

   <hr/>
   </SimpleBar>
  </nav>
 )
}

export default Sidebar
