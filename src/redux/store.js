import {createStore, applyMiddleware, combineReducers} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'
import  thunk from 'redux-thunk'

import {authReducer} from './reducers/auth.reducer'
import { homeVideosReducer, selectedVideoReducer, relatedVideosReducer, searchVideosReducer, subscriptionsChannelReducer } from './reducers/video.reducer'
import { channelDetailsReducers } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'

const rootReducer = combineReducers({
 auth: authReducer,
 homeVideos: homeVideosReducer,
 selectedVideo: selectedVideoReducer,
 channelDetails: channelDetailsReducers,
 commentList: commentListReducer,
 relatedVideos: relatedVideosReducer,
 searchVideos: searchVideosReducer,
 subscriptionsChannel: subscriptionsChannelReducer,
})

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

export default store