import React from 'react';
import UserPosts from "../components/userPosts/UserPosts";


const UserPostPage = () => {

  // const {userStorage:{allUsers}, postStore:{allPosts}} = useContextProvider();
  //
  // const [userWithPostsState, setUserWithPostsState] = useState<UserWithPostsType[]>([])
  //
  // const usersWithPostsArray = useMemo(() => {
  //
  //     return allUsers.map(user => {
  //       return {...user, posts: allPosts.filter(post => post.userId === user.id)};
  //     })
  // }, [allUsers, allPosts])
  //
  // useEffect(() => {
  //   setUserWithPostsState(usersWithPostsArray);
  // }, [usersWithPostsArray])

  return (
    <div>
      <UserPosts/>
    </div>
  );
};

export default UserPostPage;