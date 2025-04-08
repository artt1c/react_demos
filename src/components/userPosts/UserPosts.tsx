import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../../context/store";
import {UserWithPostsType} from "../../models/UserWithPostsType";



const UserPosts = () => {

  const {postStore: {allPosts}, userStore: {allUsers}} = useStore();

  const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])

  const usersWithPostsArray = useMemo(() => {

      return allUsers.map(user => {
        return {...user, posts: allPosts.filter(post => post.userId === user.id)};
      })
  }, [allUsers, allPosts])

  useEffect(() => {
    setUserWithPostsState(usersWithPostsArray);
  }, [usersWithPostsArray])

  return (
    <div>
      {userWithPostsState.map(item => (
        <div key={item.id}>
          {item.name}
          <ul>
            {item.posts.map((post) => (<li key={post.id}>{post.title}</li>))}
          </ul>
      </div>))}
    </div>
  );
};

export default UserPosts;