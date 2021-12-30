import React, { useEffect, useState } from 'react'
import './_relatedVideos.scss'

import {AiFillEye} from 'react-icons/ai'
import request from '../../api'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'
import numeral from 'numeral'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const RelatedVideos = ({video, searchScreen}) => {

  const {id, snippet: {channelId, channelTitle, description, title, publishedAt, thumbnails: {medium}}} = video

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)
  
  const isVideo = id.kind === 'youtube#video'
 
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
    get_video_details()
  }, [id])


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

  // Click To play relatedVideo in watchScreen
  const handleClick = () => {
    isVideo ?
      history.push(`/watch/${id.videoId}`) :
        history.push(`/channel/${id.channelId}`)
  }

  const thumbnail = !isVideo && 'videoHorizontal-thumbnail-channel'

 return (
  <Row className="relatedVideos m-1 py-2 align-items-center" onClick={handleClick}>
   <Col xs={6} md={ searchScreen ? 4 : 6 } className='relatedVideos-left'>
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

   <Col xs={6} md={ searchScreen ? 8 : 6 } classname='relatedVideos-right p-0'>
     <p className="relatedVideos-title mb-1">
       {title}
     </p>


     {
       !isVideo && <p className='mt-1'>{description}</p>
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

   </Col>
  </Row>
 )
}
export default RelatedVideos