import classes from "./NewPost.module.css";
// import React, { useState } from 'react';
import React, { useState, useID } from "react";
import { v4 as uuidv4 } from "uuid";

function NewPost(props) {
  //const [enteredBody,setEnteredBody]= useState('');//state is a array of 2 elements
  //stateData[0]//its always the current state value so currently the empty string
  //stateData[1]//the second one is the state updating function which we can execute for new values
  // function changeBodyHandler(event){
  //    // console.log(event.target.value)
  //     // console.log(event.target.data)
  //     setEnteredBody(event.target.value)
  // }
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    // const newId = useID();
    const postData = {
      //no validation added with state gotta check some udemy courses for validation specifically
      body: enteredBody,
      author: enteredAuthor,
      id: uuidv4(),
    }; //vanilla js object
    console.log(postData);
    props.onAddPost(postData);
    props.onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input onChange={authorChangeHandler} type="text" id="name" required />
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
