import React from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import {MdThumbUp, MdThumbDown} from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = ({ video: {snippet, statistics}, videoId }) => {

  const {channelId, channelTitle, description, title, publishedAt} = snippet
  const {viewCount, likeCount, dislikeCount} = statistics

 return (
  <div className='videoMetaData py-2'>
   <div className="videoMetaData-top">

    <h5>{title}</h5>
    <div className="d-flex justify-content-between align-items-center py-1">
     <span>
      <span>{numeral(viewCount).format('0.a')} views •</span>
      <span className='m-1'>{moment(publishedAt).fromNow()}</span>
     </span>
  
     <div>
      <span className="m-3">
       <MdThumbUp size={26}/>  {numeral(likeCount).format('0.a')}
      </span>
      <span className="m-3">
       <MdThumbDown size={26}/> {numeral(dislikeCount).format('0.a')}
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
      <span>{channelTitle}</span>
      <span>{numeral(1000000).format('0.a')} subscribers</span>
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
       {description}
     </ShowMoreText>
   </div>
  </div>
 )
}

export default VideoMetaData