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
          <div className='heading'>
            <img src={channelSnippet?.thumbnails?.default?.url} alt="img" className='rounded-circle'/>
            <div className="d-flex flex-column span">
              <span className='title'>{channelTitle}</span>
              <span className='subscribers'><span>{numeral(channelStatistics?.subscriberCount).format('0.a')}</span> subscribers</span>
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
          <button><MdOutlineThumbUp className='icon-1'/> {numeral(likeCount).format('0.a')} <span className='line'>|</span> <MdOutlineThumbDown className='icon-1'/></button>
          <button><MdOutlineShare  className='icon-1'/> Share</button>
          <button><MdOutlineDownload  className='icon-1'/> Download</button>
          <button><MdOutlineClose  className='icon-1'/> Clip</button>
        </div>
      </div>

      <div className="videoMetaData-description">
        <ShowMoreText
          lines={3}
          more='...more'
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
            <button><MdOutlinePlaylistPlay className='icon-1'/> Videos</button>
            <button><MdOutlinePerson className='icon-1'/> About</button>
          </div>
        </ShowMoreText>
      </div>
    </div>
  )
}

export default VideoMetaData