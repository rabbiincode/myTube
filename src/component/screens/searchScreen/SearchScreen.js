import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../../../redux/actions/videos.action'
import RelatedVideos from '../../relatedVideos/RelatedVideos'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import CustomHelmet from '../../helmet/CustomHelmet'
import '../../relatedVideos/_relatedVideos.scss'

const SearchScreen = () => {
  const { Query } = useParams()
  const dispatch = useDispatch()
  const { videos, loading } = useSelector(state => state.searchVideos.videos)
  //console.log(Query);

  useEffect(() => {
    dispatch(getVideosBySearch(Query))
  }, [dispatch, Query])
 
  return (
    //videos?.map... '?' - here is called Optional chaining
    <Container className='search-screen mt-3'>
      <CustomHelmet title={Query}/>
      {
        !loading ? (
          videos?.map(video => (
            <RelatedVideos video={video} key={video.id.videoId} searchScreen/>
          ))
        ) : (
          <SkeletonTheme baseColor='#0d1015' highlightColor='#0d1015'>
            <Skeleton width='100%' height='160px' count={20}/>
          </SkeletonTheme>
        )
      }
    </Container>
  )
}

export default SearchScreen