import firebase from 'firebase/compat/app'

import auth from '../../firebase'

import {LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOAD_PROFILE, LOG_OUT} from '../actionType'


export const login = () => async dispatch => {
 try {
    dispatch({
     type: LOGIN_REQUEST,
    })
  
  const provider = new firebase.auth.GoogleAuthProvider()
  //adding the youtube API scope
  provider.addScope = ['https://www.goggleapis.com/auth/youtube.force-ssl']
  //.../auth/youtube.force-ssl

  const res = await auth.signInWithPopup(provider)
  const accessToken = res.credential.accessToken

  const profile = {
   name: res.additionalUserInfo.profile.name,
   photoURL: res.additionalUserInfo.profile.picture,
  }

  sessionStorage.setItem('myTube-access-token', accessToken)
  sessionStorage.setItem('myTube-user', JSON.stringify(profile))


  dispatch({
   type: LOGIN_SUCCESS,
   payload: accessToken,
  })

  dispatch({
   type: LOAD_PROFILE,
   payload: profile,
  })

 } catch (error) {
  console.log(error.message)
  dispatch({
   type: LOGIN_FAIL,
   payload: error.message
  })
 }
}


export const logOut = () => async dispatch => {
  await auth.signOut()
  dispatch({
    type: LOG_OUT
  })


  sessionStorage.removeItem('myTube-access-token')
  sessionStorage.removeItem('myTube-user')

}