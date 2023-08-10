import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../../redux/actions/auth.action'
import CustomHelmet from '../../helmet/CustomHelmet'
import './_loginScreen.scss'

const LoginScreen = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector(state => state.auth.accessToken)

  const handleLogin = () => {
    dispatch(login())
  }
  
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
      <div className="login-container">
        <img src="./images/logo1.png" alt="img" />
        <button onClick={handleLogin}>Login with goggle</button>
        <p>myTube is made using YOUTUBE DATA API</p>
      </div>
    </div>
  )
}

export default LoginScreen