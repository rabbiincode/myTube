import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CustomHelmet from '../../helmet/CustomHelmet'
import { login } from '../../../redux/actions/auth.action'
import './_loginScreen.scss'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const handleLogin = () => dispatch(login())
  const accessToken = useSelector(state => state.auth.accessToken)
  //to redirect to home route if accessToken !null
  const history = useHistory()

  useEffect(() => {
    if(accessToken) {
      history.push('/')
    }
  }, [accessToken, history])

  return (
    <div className='login'>
      <CustomHelmet title='myTube/login'/>
      <img src="./images/youtube.png" alt="img" />
      <div className="login-container">
        <button onClick={handleLogin}>Login with goggle</button>
        <p>myTube is built using data from YouTube Data API</p>
      </div>
    </div>
  )
}

export default LoginScreen