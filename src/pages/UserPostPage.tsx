import React, {useEffect, useMemo, useState} from 'react';
import UserPosts from "../components/userPosts/UserPosts";
import {useContextProvider} from "../context/ContextsProvider";
import {UserWithPostsType} from "../models/UserWithPostsType";

const UserPostPage = () => {

  const {userStorage:{allUsers}, postStore:{allPosts}} = useContextProvider();

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
      <UserPosts items={userWithPostsState}/>
    </div>
  );
};

export default UserPostPage;