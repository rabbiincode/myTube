import React from 'react'
import CategoriesBars from '../../categoriesBars/CategoriesBars'
import Videos from '../../videos/Videos'
import { Container, Row, Col } from 'react-bootstrap'


const HomeScreen = () => {
 return (

<Container>
   <CategoriesBars/>
   <Row>
    {
      [...new Array(20)].map(() => {
        return (<Col lg={3} md={4}>
         <Videos/>
        </Col>)
      })
    }
      
   </Row>
  </Container>
  
 )
}

export default HomeScreen
