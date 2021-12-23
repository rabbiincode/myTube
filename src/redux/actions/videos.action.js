import {HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL} from '../actionType'

import request from '../../api'

export const getPopularVideos = () => async dispatch => {
 try {
  dispatch({
   type: HOME_VIDEOS_REQUEST,
  })
  
  //destructuring data
  const {data} = await request.get('/videos', {
   params: {
    part: 'snippet, contentDetails, statistics',
    chart: 'mostPopular',
    regionCode: 'NI',
    maxResults: 20,
    pageToken: '',
   },
  })
  //console.log(res);

  dispatch({
   type: HOME_VIDEOS_SUCCESS,
   payload: {
      videos: data.items,
      nextPageToken: data.nextPageToken,
      category: 'All',
   }
  })

 } catch (error) {
     console.log(error.message)
     dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message
     })
 }
}


export const getVideosByCategory = (keyword) => async (dispatch, getstate) => {
 try {
  dispatch({
   type: HOME_VIDEOS_REQUEST,
   })

   const {data} = await request.get('/search', {
    params: {
     part: 'snippet',
     maxResults: 20,
     pageToken: getstate().homeVideos.nextPageToken,
     q: keyword,
     type: 'video'
    },
   })

   dispatch({
    type: HOME_VIDEOS_SUCCESS,
    payload: {
       videos: data.items,
       nextPageToken: data.nextPageToken,
       category: keyword,
    }
   })
 
  } catch (error) {
      console.log(error.message)
      dispatch({
       type: HOME_VIDEOS_FAIL,
       payload: error.message
      })
  }
 }