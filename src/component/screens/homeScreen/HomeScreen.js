import React, { useEffect } from 'react'
import CategoriesBars from '../../categoriesBars/CategoriesBars'
import Videos from '../../videos/Videos'
import { Container, Row, Col } from 'react-bootstrap'
import { getPopularVideos, getVideosByCategory } from '../../../redux/actions/videos.action'
import { useDispatch, useSelector } from 'react-redux'

import InfiniteScroll from 'react-infinite-scroll-component'

import SkeletonVideos from '../../skeleton/SkeletonVideos'

const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const {videos, activeCategory, loading} = useSelector(state => state.homeVideos)

  const fetchData = () => {
    if(activeCategory === 'All')
     dispatch(getPopularVideos())
    else{
      dispatch(getVideosByCategory(activeCategory))
    }
  }
  
 return (
  <Container>
    <CategoriesBars/>
    <Row> 
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className='spinner-border text-danger d-block mx-auto'></div>
        }
        className='row'
      >
      {
        !loading ? videos.map((video) => (
          <Col lg={3} md={4}>
            <Videos videos={video} key={video.id} />
          </Col>
        ))
         : [...Array(20)].map(() => (
            <Col lg={3} md={4}>
               <SkeletonVideos/>
            </Col>
         ))
      }
      </InfiniteScroll>
    </Row> 
  </Container>
  
 )
}

export default HomeScreen
