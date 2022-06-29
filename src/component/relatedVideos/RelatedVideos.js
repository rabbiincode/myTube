import React, { useEffect, useState } from 'react'
import './_relatedVideos.scss'

import {AiFillEye} from 'react-icons/ai'
import request from '../../api'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'
import numeral from 'numeral'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const RelatedVideos = ({video, searchScreen, subScreen}) => {

  const {id, snippet: {channelId, channelTitle, description, title, publishedAt, thumbnails: {medium}, resourceId}} = video

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)
  
  const isVideo = !(id.kind === 'youtube#channel' || subScreen)
 
  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')


  useEffect(() => {
    const get_video_details = async () => {
      const {data: {items}, } = await request('/videos', {
        params: {
          part: 'contentDetails, statistics',
          id: id.videoId,
        }
      })
            
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    if (isVideo)
      get_video_details()
  }, [id, isVideo])


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

  const history = useHistory()

  const _channelId = resourceId?.channelId || channelId

  // Click To play relatedVideo in watchScreen
  const handleClick = () => {
    isVideo ?
      history.push(`/watch/${id.videoId}`) :
        history.push(`/channel/${_channelId}`)
  }

  const thumbnail = !isVideo && 'videoHorizontal-thumbnail-channel'

 return (
  <Row className="relatedVideos m-1 py-2 align-items-center" onClick={handleClick}>
   <Col xs={6} md={ searchScreen || subScreen ? 4 : 6 } className='relatedVideos-left'>
     <LazyLoadImage 
        src={medium.url}
        effect='blur'
        className={`relatedVideos-thumbnail ${thumbnail}`}
        wrapperClassName='relatedVideos-thumbnail-wrapper'
     />
     {
       isVideo && (
        <span className='relatedVideos-duration'>{_duration}</span>
      )
     }
      
   </Col>

   <Col xs={6} md={ searchScreen || subScreen ? 8 : 6 } className='relatedVideos-right p-0'>
     <p className="relatedVideos-title mb-1">
       {title}
     </p>


     {
       (searchScreen || subScreen) && <p className='mt-1 relatedVideos-desc'>{description}</p>
     }

     <div className="relatedVideos-channel d-flex align-items-center my-1">
       {/* To show in Search Screen  */}
       {
         isVideo && (
          <LazyLoadImage 
          src={channelIcon?.url}
          effect='blur'
        />
         )
       }
       

       <p className='mb-0'>{title}</p>
     </div>

     {
       isVideo && (
         <div className="relatedVideos-details">
          <AiFillEye/> <span className='spar'>{numeral(views).format('0.a')}</span>•
          <span className='spac'>{moment(publishedAt).fromNow()}</span>
        </div>
       )
     }

     {
       subScreen && (
         <p className='mt-2'>
           {video.contentDetails.totalItemCount}{' '}videos
         </p>
       )
     }

   </Col>
  </Row>
 )
}
export default RelatedVideos