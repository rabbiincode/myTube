import React from 'react'
import './_relatedVideos.scss'

import {AiFillEye} from 'react-icons/ai'
import request from '../../api'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import moment from 'moment'
import numeral from 'numeral'
import { Row, Col } from 'react-bootstrap'

const RelatedVideos = () => {
  const seconds = moment.duration('1000').asSeconds()
  const _duration = moment.utc(seconds * 1000).format('mm:ss')

 return (
  <Row className="relatedVideos m-1 py-2 align-items-center">
   <Col xs={6} md={4} className='relatedVideos-left'>
     <LazyLoadImage 
        src={'/images/person.png'}
        effect='blur'
        className='relatedVideos-thumbnail'
        wrapperClassName='relatedVideos-thumbnail-wrapper'
     />
      <span className='relatedVideos-duration'>{_duration}</span>
   </Col>

   <Col xs={6} md={8} className='relatedVideos-right p-0'>
     <p className="relatedVideos-title mb-1">
       Be a full stack developer in 1 week
     </p>
     <div className="relatedVideos-details">
       <AiFillEye/> {numeral(1000000).format('0.a')}
       {moment('2021-12-26').fromNow()}
     </div>

     <div className="relatedVideos-channel d-flex align-items-center my-1">
       <LazyLoadImage 
         src={'/images/person.png'}
         effect='blur'
       />
       <p>Rabbi</p>
     </div>
   </Col>
  </Row>
 )
}

export default RelatedVideos