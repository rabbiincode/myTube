import React, { useEffect } from 'react'
import CategoriesBars from '../../categoriesBars/CategoriesBars'
import Videos from '../../videos/Videos'
import { Container, Row, Col } from 'react-bootstrap'
import { getPopularVideos } from '../../../redux/actions/videos.action'
import { useDispatch, useSelector } from 'react-redux'


const HomeScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const {videos} = useSelector(state => state.homeVideos)
  
 return (
  <Container>
    <CategoriesBars/>
    <Row>
      {videos.map((video) => (
        <Col lg={3} md={4}>
          <Videos videos={video} key={video.id} />
        </Col>
      ))}
    </Row>
  </Container>
  
 )
}

export default HomeScreen
