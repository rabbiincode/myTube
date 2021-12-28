import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoMetaData from '../../videoMetaData/VideoMetaData'
import Comments  from '../../comments/Comments'
import RelatedVideos from '../../relatedVideos/RelatedVideos'
import { getVideoById } from '../../../redux/actions/videos.action'

import './_watchScreen.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const WatchScreen = () => {
   const { id } = useParams()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getVideoById(id))
   }, [dispatch, id])

   const {video, loading} = useSelector(state=>state.selectedVideo)

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
    {!loading ? (<VideoMetaData video={video} videoId={id} />) : (<h1>Loadingg</h1>)}

    <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
   </Col>

   <Col lg={4}>
    {[...Array(10)].map(() => (<RelatedVideos/>))}
   </Col>
  </Row>
 )
}

export default WatchScreen