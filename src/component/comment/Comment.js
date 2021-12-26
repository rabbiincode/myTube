import React from 'react'
import './_comment.scss'
import moment from 'moment'

const Comment = () => {
 return (
  <div className="comment p-2 d-flex">
   <img 
      src={'/images/person.png'}
      alt=""
      className='rounded-circle mr-3 spac'
   />
   <div className="comment-body">
    <p className="comment-header mb-1">
     summit Day • {moment('2021-12-26').fromNow()}
    </p>
    <p className='mb-0'>Nice video dude!!</p>
   </div>
  </div>
 )
}

export default Comment