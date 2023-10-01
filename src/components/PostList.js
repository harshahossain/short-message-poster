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
      <ul className={classes.posts}>
        {/* <Post author={enteredAuthor} body={enteredBody} /> */}
        {/* <Post author="Nuer" body="I used to be the best Golie" /> */}
        {posts.map((p) => (
          <Post key={p.id} author={p.author} body={p.body} />
        ))}
      </ul>
    </>
  );
}

export default PostList;
