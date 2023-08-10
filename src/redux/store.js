import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducer} from './reducers/auth.reducer'
import { channelDetailsReducers } from './reducers/channel.reducer'
import { commentListReducer } from './reducers/comments.reducer'
import  thunk from 'redux-thunk'
import { homeVideosReducer, selectedVideoReducer, relatedVideosReducer, searchVideosReducer, subscriptionsChannelReducer, channelsVideosReducer } from './reducers/video.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducers,
  commentList: commentListReducer,
  relatedVideos: relatedVideosReducer,
  searchVideos: searchVideosReducer,
  subscriptionsChannel: subscriptionsChannelReducer,
  channelsVideos: channelsVideosReducer,
})

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

export default store