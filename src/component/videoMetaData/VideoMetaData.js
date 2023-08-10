import React, { useEffect } from 'react'
import moment from 'moment'
import numeral from 'numeral'
import ShowMoreText from 'react-show-more-text'
import CustomHelmet from '../helmet/CustomHelmet'
import { MdOutlineThumbDown, MdOutlineThumbUp, MdOutlineShare, MdOutlineDownload,  MdOutlinePerson, MdOutlinePlaylistPlay, MdOutlineClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelDetails, checkSuscriptionStatus } from '../../redux/actions/channel.action'
import './_videoMetaData.scss'

const VideoMetaData = ({ video: {snippet, statistics}, videoId }) => {
  const {channelId, channelTitle, description, title, publishedAt} = snippet
  const {viewCount, likeCount } = statistics
  const dispatch = useDispatch()
  const { snippet: channelSnippet, statistics: channelStatistics,} = useSelector(state => state.channelDetails.channel)
  const subscriptionStatus = useSelector(state=>state.channelDetails.subscriptionStatus)

  useEffect(() => {
    dispatch(getChannelDetails(channelId))
    dispatch(checkSuscriptionStatus(channelId))
  }, [dispatch, channelId])

  return (
    <div className='videoMetaData py-2'>
      <CustomHelmet title={title} description={description}/>

      <div className="videoMetaData-top">
        <p>{title}</p>
      </div>

      <div className="videoMetaData-channel">
        <div className='videoMetaData-channel-title'>
          <div className='d-flex'>
            <img src={channelSnippet?.thumbnails?.default?.url} alt="img" className='rounded-circle mr-3' />
            <div className="d-flex flex-column span">
              <span className='title'>{channelTitle}</span>
              <span className='subscribe'><span>{numeral(channelStatistics?.subscriberCount).format('0.a')}</span> subscribers</span>
            </div>
          </div>

          <div className='buttons'>
            <button type='button' className='join'>Join</button>
            <button type='button' className={`btn ${subscriptionStatus && 'btn-gray'}`}>
              {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>

        <div className='buttons-1'>
          <button><MdOutlineThumbUp size={22}/> {numeral(likeCount).format('0.a')} <span className='line'>|</span> <MdOutlineThumbDown size={22}/></button>
          <button><MdOutlineShare  size={22}/> Share</button>
          <button><MdOutlineDownload  size={22}/> Download</button>
          <button><MdOutlineClose  size={22}/> Clip</button>
        </div>
      </div>

      <div className="videoMetaData-description">
        <ShowMoreText
          lines={3}
          more='Show more'
          less='Show less'
          anchorClass='showMoreText'
          expanded={false}
        >
          <div className='details'>
            <span className='views'>{numeral(viewCount).format('0.a')}</span> views
            <span className='m-2'>{moment(publishedAt).fromNow()}</span>
          </div>
          <div>{description}</div>

          <div className='channel'>
            <img src={channelSnippet?.thumbnails?.default?.url} alt="img" className='rounded-circle mr-3' />
            <div className="d-flex flex-column span">
              <span>{channelTitle}</span>
              <span className='subscribe'>{numeral(channelStatistics?.subscriberCount).format('0.a')} subscribers</span>
            </div>
          </div>

          <div className='button'>
            <button><MdOutlinePlaylistPlay size={22}/> Videos</button>
            <button><MdOutlinePerson size={22}/> About</button>
          </div>
        </ShowMoreText>
      </div>
    </div>
  )
}

export default VideoMetaData