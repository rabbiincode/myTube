import React from 'react'
import './_videos.scss'

import {AiFillEye} from 'react-icons/ai'

const Videos = () => {
 return (
  <div className='video'>
   <div className='video-top'>
    <img 
      src='https://i.ytimg.com/vi/NnUFOWR_V4Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBgYqCCuT7vHj0ZhC0xm2nup8Bx4g'
      alt=''/>
    <span>8:41</span>
   </div>
   <div className='video-title'>
    Become a programmer by Success with the Expense Tracker App
   </div>
   <div className='video-details'>
    <span>
     <AiFillEye/> 27m Views •
    </span>
    <span> 3 days ago</span>
   </div>
   <div className='video-channel'>
    <img 
      src='https://yt3.ggpht.com/ytc/AKedOLSmjxIU9yuwvDGSuHZ88rKyfjRSmHJeKFmQZbnFiQ=s68-c-k-c0x00ffffff-no-rj' 
      alt='' />
    <p>Rabbi</p>
   </div>
  </div>
 )
}

export default Videos
