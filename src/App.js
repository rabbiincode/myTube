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
import WatchScreen from './component/screens/watchScreen/WatchScreen'
import SearchScreen from './component/screens/SearchScreen'


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

       <Route path='/search/:Query'>
         <Layout>
          <SearchScreen />
         </Layout>
       </Route>
       
       <Route path='/watch/:id'>
        <Layout>
          <WatchScreen/>
        </Layout>
       </Route>
      
       <Route>
        <Redirect to='/' />
       </Route>
       
      </Switch>
  )
}

export default App
