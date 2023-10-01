import classes from "./NewPost.module.css";
// import React, { useState } from 'react';

function NewPost(props) {
  //const [enteredBody,setEnteredBody]= useState('');//state is a array of 2 elements
  //stateData[0]//its always the current state value so currently the empty string
  //stateData[1]//the second one is the state updating function which we can execute for new values
  // function changeBodyHandler(event){
  //    // console.log(event.target.value)
  //     // console.log(event.target.data)
  //     setEnteredBody(event.target.value)
  // }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input onChange={props.onAuthorChange} type="text" id="name" required />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
