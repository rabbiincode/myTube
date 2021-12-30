import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoMetaData from '../../videoMetaData/VideoMetaData'
import Comments  from '../../comments/Comments'
import RelatedVideos from '../../relatedVideos/RelatedVideos'
import { getVideoById, getRelatedVideos } from '../../../redux/actions/videos.action'

import './_watchScreen.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const WatchScreen = () => {
   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideoById(id))

      dispatch(getRelatedVideos(id))
   }, [dispatch, id])

   const {video, loading} = useSelector(state=>state.selectedVideo)

   const {videos, loading: relatedVideosLoading} = useSelector(state=>state.relatedVideos)

 return (
  <Row>
   <Col lg={8}>
    <div className="watchScreen-player">
     <iframe src={`https://www.youtube.com/embed/${id}`} 
             frameBorder="0"
             title={video?.snippet?.title}
             allowFullScreen
             width='100%'
             height='100%'></iframe>
    </div>
    {!loading ? (<VideoMetaData video={video} videoId={id} />) : (<h1>Loading</h1>)}

    <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
   </Col>

   <Col lg={4}>
      {/* filter was added because of the inconsistency of 
        the API as some of the relatedVideos does not have 'snippet' */}


     {!loading ? (videos ?.filter(video => video.snippet)
         .map(video => (<RelatedVideos video={video} key={video.id.videoId} />
      ))
     ) : ( 
       <SkeletonTheme baseColor='#0d1015' highlightColor='#0d1015'>
          <Skeleton width='100%' height='130px' count={15}/>
       </SkeletonTheme>
         
     )}
   </Col>
  </Row>
 )
}

export default WatchScreen