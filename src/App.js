import React, { useState } from 'react'
import Header from './component/header/Header'
import HomeScreen from './component/screens/homeScreen/HomeScreen'
import { Container } from 'react-bootstrap'
import Sidebar from './component/sidebar/Sidebar'

import './_app.scss'
import LoginScreen from './component/screens/LoginScreen'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

const Layout = ({ children }) => {

  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)

    return(
      <>
       <Header handleToggleSidebar={handleToggleSidebar} />
       <div className="app_container">
         <Sidebar
           sidebar={sidebar}
           handleToggleSidebar={handleToggleSidebar}
         />
         <Container className="app-main">
           {children}    
         </Container>
       </div>
      </>
  )
}

const App = () => {
   return( 
    <Router>
      <Switch>
      <Route path='/' exact>
       <Layout>
        <HomeScreen />
       </Layout>
     </Route>

     <Route path='/auth'>
       <LoginScreen />
     </Route>

     <Route path='/search'>
       <Layout>
        <h1>SEARCH</h1>
       </Layout>
     </Route>
       <Redirect to='/' />
     <Route >

     </Route>
      </Switch>
    </Router>
 )
}

export default App