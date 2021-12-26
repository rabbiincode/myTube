import React from 'react'
import Comment from '../comment/Comment'
import './_comments.scss'

const Comments = () => {
  const handleComment = () => {}

 return (
  <div className='comments'>
   <p>1234 Comments</p>
   <div className="comments-form d-flex w-100 my-2">
    <img 
      src={'/images/person.png'} 
      alt="" 
      className='mr-3 rounded-circle spac'
    />
    <form onSubmit={handleComment} className='d-flex flex-grow-1'>
     <input 
        type="text"
        className='flex-grow-1'
        placeholder='Add a public comment' 
     />
     <button className='border-0 p-2'>Comment</button>
    </form>
   </div>
   
   <div className="comments-list">
    {[...Array(15)].map(() => (
     <Comment/>
    ))}
   </div>
  </div>
 )
}

export default Comments