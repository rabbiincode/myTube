import request from "../../api"
import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_FAIL, SET_SUBSCRIPTION_STATUS } from "../actionType"

export const getChannelDetails = (id) => async dispatch => {
  try {
    dispatch({
      type: CHANNEL_DETAILS_REQUEST,
    })
  
    const { data } = await request('/channels', {
      params: {
        part: 'snippet, statistics, contentDetails',
        id: id,
      }
    })

    dispatch({
      type: CHANNEL_DETAILS_SUCCESS,
      payload: data.items[0],
    })
 
   } catch (error){
     console.log(error.response.data)
     dispatch({
      type: CHANNEL_DETAILS_FAIL,
      payload: error.response.data
    })
  }
}

export const checkSuscriptionStatus = (id) => async (dispatch, getState) => {
  try {   
    const { data } = await request('/subscriptions', {
      params: {
        part: 'snippet',
        forChannelId: id,
        mine: true
      },
      //getting the Access Token from the Redux store
      headers:{
        Authorization: `Bearer ${getState().auth.accessToken}`
      }
    })
    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !==0,
    })
    //console.log(data);
 
  } catch (error){
    //console.log(error.response.data)
    dispatch({
      type: SET_SUBSCRIPTION_FAIL,
      payload: error.message
    })
  }
}