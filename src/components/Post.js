//const names=['Maximilian','Nauer']
import React from "react";
import classes from "./Post.module.css";

function Post(props) {
  //here we could also do {author,body} instead of props so we could call those without the props dot
  //so we dont have to construct? and we dont have to put this this neither?>??? KEWWWWWL
  //const chosenName=Math.random()>0.5? names[0]:names[1]
  return (
    <li className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
    </li>
  );
}

export default Post;
