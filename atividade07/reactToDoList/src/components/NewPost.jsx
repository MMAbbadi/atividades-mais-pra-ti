import { useState} from 'react'
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost }) {
  // Variables
  let [enteredBody, setEnteredBody] = useState("")
  let [enteredAuthor, setEnteredAuthor] = useState("")
  //Functions
  let changeBodyHandle = (e) => setEnteredBody(e.target.value)
  let authorChangeHandle = (e) => setEnteredAuthor(e.target.value)
  let submitHandler = (e) => {
    e.preventDefault();
    let postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData)
    onCancel()
  }
   return (
    <form className={classes.form} 
    onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} 
        onChange={changeBodyHandle}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required 
        onChange={authorChangeHandle} />
      </p>
      <p className={classes.actions}>
      <button type='button' 
      onClick={onCancel}>Cancel</button>
      <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;