import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import request from '../../api'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'
import numeral from 'numeral'
import './_relatedVideos.scss'

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
    isVideo ? history.push(`/watch/${id.videoId}`) : history.push(`/channel/${_channelId}`)
  }

  const thumbnail = !isVideo && 'videoHorizontal-thumbnail-channel'

  return (
    <Row className={`relatedVideos ${searchScreen && 'relatedVideos-search-screen'}`} onClick={handleClick}>
      <Col xs={6} md={ searchScreen || subScreen ? 4 : 5 } className='relatedVideos-left'>
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

      <Col xs={6} md={ searchScreen || subScreen ? 8 : 7 } className='relatedVideos-right p-0'>
        <span className={`relatedVideos-title mb-0.5 ${searchScreen && 'relatedVideos-font mb-0'}`}>{title}</span>

        {
          isVideo && (
            <div className="relatedVideos-details">
              {
                (!searchScreen) && <p>{channelTitle}</p>
              }    
              <span className='spar'>{numeral(views).format('0.a')}</span>views •
              <span className='span'>{moment(publishedAt).fromNow()}</span>
              {
                (searchScreen) && <p className='icon'><LazyLoadImage src={channelIcon?.url} effect='blur'/>{channelTitle}</p>
              }    
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

        {
          (searchScreen || subScreen) && <p className='relatedVideos-desc'>{description}</p>
        }
      </Col>
    </Row>
  )
}

export default RelatedVideos