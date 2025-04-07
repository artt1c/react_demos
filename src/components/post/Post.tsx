import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

interface IProps {
  post:IPost
}

const Post:FC<IProps> = ({post}) => {
  return (
    <div>
      {post.id} {post.body}
      <hr/>
    </div>
  );
};

export default Post;