import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    setPosts((existingPost) => [postData, ...existingPost]);
  } //if new post or stae updates the old state then we should use the arrow fucntion format// ebong uporer state ta empty array ejonene nah. nw state old state er upor depend korlei dite hobe
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangeHandler}
            // onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      {posts.length > 0 ? (
        <ul className={classes.posts}>
          {posts.map((p) => (
            <Post key={p.id} author={p.author} body={p.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((p) => (
            <Post key={p.id} author={p.author} body={p.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )} */}
    </>
  );
}

export default PostList;
