import { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

function PostList(props) {

  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((p) => (
            <Post key={p.id} author={p.author} body={p.body} id={p.id} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
