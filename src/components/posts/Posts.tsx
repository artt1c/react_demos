import React from 'react';
import Post from "../post/Post";
import {useContextProvider} from "../../context/ContextsProvider";

const Posts = () => {
  const {postStore: {allPosts}} = useContextProvider();

  return (
    <div>
      {
        allPosts.map((post) => (<Post key={post.id} post={post}/>))
      }
    </div>
  );
};

export default Posts;