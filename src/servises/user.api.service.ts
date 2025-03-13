import IUser from "../model/IUser";
import axios, {AxiosResponse} from "axios";

// const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: {'Content-type': 'application/json'}
});

const getUsers = ():Promise<AxiosResponse<IUser[]>> => {
  return axiosInstance.get('');
}

const getUser= async (id:number):Promise<AxiosResponse<IUser>> => {
  return await axiosInstance.get('/'+id);
}

export {
  getUsers,
  getUser,
}