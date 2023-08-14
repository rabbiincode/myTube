import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'
import { MdSort } from 'react-icons/md'
import Comment from '../comment/Comment'
import './_comments.scss'

const Comments = ({videoId, totalComments}) => {
  const dispatch = useDispatch()
  const { photoURL } = useSelector(state=>state.auth?.user)
  //State to make it a controlled input
  const [text, setText] = useState('')

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId))
  }, [dispatch, videoId]) 

  const comments = useSelector(state=>state.commentList.comments)
  const _comments = comments?.map(comment=>comment.snippet.topLevelComment.snippet)

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return
    dispatch(addComment(videoId, text))
    setText('')
  }

  return (
    <div className='comments'>
      <div className="comments-count">
        <span className='number'>
          <NumberFormat
            value={totalComments}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" Comments"}
          />
        </span>
        <span className='sort'><MdSort size={25}/> <span>Sort by</span></span>
      </div>

      <div className="comments-form w-100 my-2">
        <img src={photoURL} alt="img" className='mr-3 rounded-circle span' />
        <form onSubmit={handleComment}>
          <input 
            type="text"
            className='flex-grow-1'
            placeholder='Add a comment' 
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button disabled={!text}>Comment</button>
        </form>
      </div>
   
      <div className="comments-list">
        {_comments?.map((comment, i) => <Comment comment={comment} key={i}/>)}
      </div>
    </div>
  )
}

export default Comments