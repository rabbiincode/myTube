import React, { useState } from 'react'
import Header from './component/header/Header'
import HomeScreen from './component/screens/homeScreen/HomeScreen'
import { Container } from 'react-bootstrap'
import Sidebar from './component/sidebar/Sidebar'

import './_app.scss'
import LoginScreen from './component/screens/LoginScreen'

const App = () => {

const [sidebar, toggleSidebar] = useState(false)

const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
    <>
     <Header handleToggleSidebar={handleToggleSidebar} />
     <div className="app_container">
       <Sidebar
         sidebar={sidebar}
         handleToggleSidebar={handleToggleSidebar}
       />
       <Container className="app-main">
         <HomeScreen/>
       </Container>
     </div>
    </>
    //<LoginScreen/>
  )
}

export default App
