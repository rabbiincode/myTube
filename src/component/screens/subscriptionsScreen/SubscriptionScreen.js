import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { getSubscribedChannels } from '../../../redux/actions/videos.action'
import CustomHelmet from '../../helmet/CustomHelmet'
import RelatedVideos from '../../relatedVideos/RelatedVideos'

const SubscriptionScreen = () => {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getSubscribedChannels())
  }, [dispatch])

  const { videos, loading } = useSelector(state=>state.subscriptionsChannel)

 return (
  <Container>
    <CustomHelmet title='subscriptions'/>
    {
      !loading ? (
        videos?.map(video => (
          <RelatedVideos video={video} key={video.id} subScreen />
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

export default SubscriptionScreen