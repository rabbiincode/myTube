import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoMetaData from '../../videoMetaData/VideoMetaData'
import Comments  from '../../comments/Comments'
import RelatedVideos from '../../relatedVideos/RelatedVideos'
import './_watchScreen.scss'

const WatchScreen = () => {
 return (
  <Row>
   <Col lg={8}>
    <div className="watchScreen-player">
     <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" 
             frameBorder="0"
             title='MY VIDEO'
             allowFullScreen
             width='100%'
             height='100%'></iframe>
    </div>

    <VideoMetaData/>
    <Comments/>
   </Col>

   <Col lg={4}>
    {[...Array(10)].map(() => (<RelatedVideos/>))}
   </Col>
  </Row>
 )
}

export default WatchScreen