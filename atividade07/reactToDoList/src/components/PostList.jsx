import { useState } from 'react'
import Post from './Post.jsx'
import NewPost from './NewPost.jsx'
import Modal from './Modal.jsx'
import classes from './PostList.module.css'

export default function PostList({ isPosting, onStopPosting }) {
  let [postList, setPostList] = useState([])

  function addPostHandler(postData){
    setPostList(posts => [...posts, postData ])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      {postList.length > 0 && (
      <ul className={classes.list}>
        {postList.map(post => <Post key={post.body} author={post.author} body={post.body} />
        )}
      </ul>
      )}
      {postList.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>No post yet</h2>
          <p>Start adding some</p>
        </div>
      )}
    </>
  )
}