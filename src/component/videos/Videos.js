import React, { useEffect, useState } from 'react'
import './_videos.scss'

import {AiFillEye} from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'

const Videos = ( {videos} ) => {

  const { id, snippet:{channelId, channelTitle, title, publishedAt, thumbnails: {medium}, } } = videos

  //state variables for the views
  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')

  const _videoId = id?.videoId || id

  //because of inconsistent data in the API call we pass into useEffect first
  useEffect(() => {
    const get_video_details = async () => {
      const {data: {items}, } = await request('/videos', {
        params: {
          part: 'contentDetails, statistics',
          id: _videoId,
        }
      })
      //console.log(items);
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    get_video_details()
  }, [_videoId])

  //for channel icon
  useEffect(() => {
    const get_channel_icon = async () => {
      const {data: {items} } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        }
      })
     setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon()
  }, [channelId])

 return (
  <div className='video'>
   <div className='video-top'>
    <img 
      src={medium.url}
      alt=''/>
    <span>{_duration}</span>
   </div>
   <div className='video-title'>
    {title}
   </div>
   <div className='video-details'>
    <span>
    {/* process video views using numerals */}
     <AiFillEye/> {numeral(views).format('0.a')}
    </span>
    <span>{moment(publishedAt).fromNow()}</span>
   </div>
   <div className='video-channel'>
    <img 
      src = {channelIcon?.url}
      alt='' />
    <p>{channelTitle}</p>
   </div>
  </div>
 )
}

export default Videos
