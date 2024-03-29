import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoMetaData from '../../videoMetaData/VideoMetaData'
import Comments  from '../../comments/Comments'
import RelatedVideos from '../../relatedVideos/RelatedVideos'
import { getVideoById, getRelatedVideos } from '../../../redux/actions/videos.action'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Helmet } from 'react-helmet'
import InfiniteScroll from 'react-infinite-scroll-component'
import './_watchScreen.scss'

const WatchScreen = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {video, loading} = useSelector(state => state.selectedVideo)
  const {videos} = useSelector(state => state.relatedVideos)

  useEffect(() => {
    dispatch(getVideoById(id))
    dispatch(getRelatedVideos(id))
  }, [dispatch, id])

  const fetchData = () => dispatch(getRelatedVideos())

  let relatedVideos = 
  <InfiniteScroll
    dataLength={videos.length}
    next={fetchData}
    hasMore={true}
    loader={
      <div className='spinner-border text-danger d-block mx-auto'></div>
    }
  >
    {!loading ? (videos?.filter(video => video.snippet)
      .map(video => (<RelatedVideos video={video} key={video.id.videoId} />))
      ) : (
      <SkeletonTheme baseColor='#0d1015' highlightColor='#0d1015'>
        <Skeleton width='100%' height='130px' count={15}/>
      </SkeletonTheme>
    )}
  </InfiniteScroll>

  return (
    <Row className='watch-screen'>
      <Helmet>
        <title>{video?.snippet?.title}</title>
      </Helmet>

      <Col lg={9}>
        <div className="watch-screen-player">
          <iframe src={`https://www.youtube.com/embed/${id}`} 
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width='100%'
            height='100%'>
          </iframe>
        </div>
        
        {!loading ? (<VideoMetaData video={video} videoId={id} />) : (<h1>Loading...</h1>)}
        <Row className='large-screen-hide'>{relatedVideos}</Row>
        <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
      </Col>

      <Col lg={3} className='small-screen-hide'>
        {/* filter was added because of the inconsistency of the API as some of the relatedVideos does not have 'snippet' */}
        {relatedVideos}
      </Col>
    </Row>
  )
}

export default WatchScreen