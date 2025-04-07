import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {}
});

const userService = {
  getUsers: async () => {
    return await axiosInstance.get<IUser>("/users");
  }
}

const postService = {
  getPosts: async () => {
    return await axiosInstance.get<IPost>("/posts");
  }
}

export {
  postService,
  userService
}