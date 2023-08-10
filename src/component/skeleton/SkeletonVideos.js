import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonVideos = () => {
  return (
    <div  color style={{width:'100%', margin:'1rem 0'}}>
      <SkeletonTheme baseColor="#0d1015" highlightColor="#0d1015">
        <Skeleton height={180}/>
        <div>
          <Skeleton 
            style={{ margin: '0.5rem'}} 
            circle height={40} width={40}/>
          <Skeleton 
          height={40} width='75%'/>
        </div>
      </SkeletonTheme>
    </div>
  )
}

export default SkeletonVideos