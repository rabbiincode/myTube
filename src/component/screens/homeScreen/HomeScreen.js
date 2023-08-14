import React, { useEffect } from 'react'
import CategoriesBars from '../../categoriesBars/CategoriesBars'
import Videos from '../../videos/Videos'
import { Col, Row } from 'react-bootstrap'
import { getPopularVideos, getVideosByCategory } from '../../../redux/actions/videos.action'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideos from '../../skeleton/SkeletonVideos'
import './_home.scss'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const {videos, activeCategory, loading} = useSelector(state => state.homeVideos)

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const fetchData = () => {
    if(activeCategory === 'All')
     dispatch(getPopularVideos())
    else{
      dispatch(getVideosByCategory(activeCategory))
    }
  }
  
  return (
    <div className='home'>
      <CategoriesBars/>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div className='spinner-border text-danger d-block mx-auto'></div>
        }
      >
        <Row className='home-videos'>
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
        </Row>
      </InfiniteScroll>
    </div>
  )
}

export default HomeScreen