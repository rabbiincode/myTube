import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getChannelDetails } from '../../../redux/actions/channel.action'
import { getVideosByChannel } from '../../../redux/actions/videos.action'
import CustomHelmet from '../../helmet/CustomHelmet'
import Videos from '../../videos/Videos'
import numeral from 'numeral'
import './_channelScreen.scss'

const ChannelScreen = () => {
  const { channelId } = useParams()
  const dispatch = useDispatch()
  const { videos, loading } = useSelector(state=>state.channelVideos)
  const { snippet, statistics } = useSelector(state=>state.channelDetails.channel)

  useEffect(() => {
    dispatch(getVideosByChannel(channelId))

    dispatch(getChannelDetails(channelId))
  }, [dispatch, channelId])

  return (
    <>
      <CustomHelmet title={snippet?.title} />
      <div className="d-flex justify-content-between align-items-center my-2 px-5 py-2 channelHeader">
        <div className='d-flex align-items-center'>
          <img src={snippet?.thumbnails?.default?.url} alt="img" />

          <div className="ml-3 channelHeader-details">
            <h3>{snippet?.title}</h3>
            <span>{numeral(statistics?.subscriberCount).format('0.a')} subscribers</span>
          </div>
        </div> 
       <button>subscribe</button>
      </div>

      <Container>
        <Row className='mt-2'>
          {
            !loading 
            ? videos?.map(video => (
              <Col md={3} lg={3}>
                <Videos video={video} channelScreen />
              </Col>
            ))
            : [...Array(15)].map(() => (
              <Col md={3} lg={3}>
                <SkeletonTheme baseColor='#0d1015' highlightColor='#0d1015'>
                  <Skeleton width='100%' height='140px' />
                </SkeletonTheme>
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default ChannelScreen