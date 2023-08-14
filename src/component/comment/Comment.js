import React from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { MdOutlineThumbDown, MdOutlineThumbUp } from 'react-icons/md'
import './_comment.scss'

const Comment = ({comment}) => {
  const {authorDisplayName, authorProfileImageUrl, publishedAt, likeCount, textDisplay} = comment

  return(
    <div className="comment py-2 d-flex">
      <img 
        src={authorProfileImageUrl}
        alt="img"
        className='rounded-circle mr-3 span'
      />
      <div className="comment-body">
        <p className="comment-header mb-1">
          <span>@{authorDisplayName}</span> {moment(publishedAt).fromNow()}
        </p>
        <p className='comment-text mb-2'>{textDisplay}</p>
        <p className='comment-details'>
          <span className='like'><MdOutlineThumbUp className='icon-1'/> {numeral(likeCount).format('0.a')}</span>
          <span><MdOutlineThumbDown className='icon-1'/></span>
          <span className='reply'>Reply</span>
        </p>
      </div>
    </div>
  )
}

export default Comment