import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserPostPage from "../pages/UserPostPage";

const routes = [{
  path:'', element:<App/>, children:[
    {path:'users', element: <UsersPage/>},
    {path:'posts', element: <PostsPage/>},
    {path:'userPosts', element: <UserPostPage/>},
  ]
}];
export const router = createBrowserRouter(routes)