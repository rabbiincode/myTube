import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'
import Comment from '../comment/Comment'
import './_comments.scss'

const Comments = ({videoId, totalComments}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId))
  }, [dispatch, videoId]) 

  const comments = useSelector(state=>state.commentList.comments)

  //State to make it a controlled input
  const [text, setText] = useState('')

  const _comments = comments?.map(comment=>comment.snippet.topLevelComment.snippet)

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return
    dispatch(addComment(videoId, text))
    setText('')
    }

  const { photoURL } = useSelector(state=>state.auth?.user)
  console.log(photoURL);

 return (
  <div className='comments'>
   <p>
     <NumberFormat
       value={totalComments}
       displayType={"text"}
       thousandSeparator={true}
       suffix={" Comments"}
     />
   </p>
   <div className="comments-form d-flex w-100 my-2">
    <img 
      src={photoURL} 
      alt="" 
      className='mr-3 rounded-circle spac'
    />
    <form onSubmit={handleComment} className='d-flex flex-grow-1'>
     <input 
        type="text"
        className='flex-grow-1'
        placeholder='Add a public comment' 
        value={text}
        onChange={e => setText(e.target.value)}
     />
     <button className='border-0 p-2'>Comment</button>
    </form>
   </div>
   
   <div className="comments-list">
    {_comments?.map((comment, i) => (
     <Comment comment={comment} key={i}/>
    ))}
   </div>
  </div>
 )
}

export default Comments