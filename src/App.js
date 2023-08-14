/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Header from './component/header/Header'
import Sidebar from './component/sidebar/Sidebar'
import HomeScreen from './component/screens/homeScreen/HomeScreen'
import WatchScreen from './component/screens/watchScreen/WatchScreen'
import LoginScreen from './component/screens/loginScreen/LoginScreen'
import SearchScreen from './component/screens/searchScreen/SearchScreen'
import ChannelScreen from './component/screens/channelScreen/ChannelScreen'
import SubscriptionScreen from './component/screens/subscriptionsScreen/SubscriptionScreen'
import './_app.scss'

const Layout = ({ children, hideSidebar, showSidebar }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const handleToggleSidebar = () => setToggleSidebar(!toggleSidebar)

  return(
    <>
      <Header handleToggleSidebar={handleToggleSidebar}/>
      <div className="app-container">
        <Sidebar
          hideSidebar={hideSidebar}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container className={`app-main ${(toggleSidebar || hideSidebar) && 'app-main-1'}`}>
          {children}
        </Container>
      </div>
    </>
  )
}

const App = () => {
  const [hideSidebar, setHideSidebar] = useState(true)
  const [showSidebar, setShowSidebar] = useState(true)
  const { accessToken, loading } = useSelector(state => state.auth)
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
          <HomeScreen/>
        </Layout>
      </Route>

      <Route path='/auth'>
        <LoginScreen/>
      </Route>

      <Route path='/search/:Query'>
        <Layout>
          <SearchScreen/>
        </Layout>
      </Route>

      <Route path='/watch/:id'>
        <Layout hideSidebar={hideSidebar} showSidebar={showSidebar}>
          <WatchScreen/>
        </Layout>
      </Route>

      <Route path='/feed/subscriptions'>
        <Layout>
          <SubscriptionScreen/>
        </Layout>
      </Route>

      <Route path='/channel/:channelId'>
        <Layout>
          <ChannelScreen/>
        </Layout>
      </Route>

      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  )
}

export default App