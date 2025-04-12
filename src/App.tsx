import React, {FC, useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";

const App: FC = ()=> {

  const dispatch = useAppDispatch();

  const {userSlice: {users}, postSlice: {posts}} = useAppSelector(state => state);

  useEffect(() => {
    dispatch(userActions.loadUsers())
    dispatch(postActions.loadPosts())
  }, []);

  return (
    <div>
      {
        users.map((user) => (<div key={user.id}>{user.name}: {user.email}</div>))
      }
      <hr/>
      {
        posts.map((post) => (<div key={post.id}>{post.title}</div>))
      }
    </div>
  );
}

export default App;
