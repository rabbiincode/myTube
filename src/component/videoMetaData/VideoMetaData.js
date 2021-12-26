import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import {MdThumbUp, MdThumbDown} from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
 return (
  <div className='videoMetaData py-2'>
   <div className="videoMetaData-top">

    <h5>video title</h5>
    <div className="d-flex justify-content-between align-items-center py-1">
     <span>
      <span>{numeral(20000).format('0.a')} views</span>
      <span className='m-2'>{moment('2021-12-26').fromNow()}</span>
     </span>
  
     <div>
      <span className="m-3">
       <MdThumbUp size={26}/>  {numeral(2000).format('0.a')}
      </span>
      <span className="m-3">
       <MdThumbDown size={26}/> {numeral(20).format('0.a')}
      </span>
     </div>
    
    </div>
   </div>

   <div className="videoMetaData-channel d-flex justify-content-between align-items-center my-2 py-3">
    <div className='d-flex'>
     <img src={'/images/person.png'} 
          alt="" 
          className='rounded-circle mr-3'
     />
     <div className="d-flex flex-column spac">
      <span>Rabbi</span>
      <span>{numeral(1000000).format('0.a')}Subscribers</span>
     </div>
    </div>
    <button className='btn border-0 p-2 m-2'>Subscribe</button>
   </div>

   <div className="videoMetaData-description">
     <ShowMoreText
        lines={3}
        more='Show more'
        less='Show less'
        anchorClass='showMoreText'
        expanded={false}
     >
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aspernatur eum praesentium saepe commodi error architecto aliquid. 
       Non numquam doloremque dignissimos.
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aspernatur eum praesentium saepe commodi error architecto aliquid. 
       Non numquam doloremque dignissimo
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aspernatur eum praesentium saepe commodi error architecto aliquid. 
       Non numquam doloremque dignissimos.
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Aspernatur eum praesentium saepe commodi error architecto aliquid. 
       Non numquam doloremque dignissimo
     </ShowMoreText>
   </div>
  </div>
 )
}

export default VideoMetaData