import React, { useEffect, useState } from 'react'
import Header from './component/header/Header'
import HomeScreen from './component/screens/homeScreen/HomeScreen'
import { Container } from 'react-bootstrap'
import Sidebar from './component/sidebar/Sidebar'

import './_app.scss'
import LoginScreen from './component/screens/LoginScreen'
import {Redirect, Route, Switch} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


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
  const {accessToken, loading} = useSelector(state => state.auth)

  const history = useHistory()

  useEffect(() => {
    if(!loading && !accessToken){
      history.push('/auth')
    }
  }, [accessToken, loading, history])

   return( 
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
 )
}

export default App
