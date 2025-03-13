import IUser from "../model/IUser";
import axios, {AxiosResponse} from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {'Content-type': 'application/json'}
});

axiosInstance.interceptors.request.use(interceptedReqest => {
  // interceptedReqest.headers.login = 'foo';
  // interceptedReqest.headers.password = 'bar';
  interceptedReqest.headers.token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  console.log(interceptedReqest);
  return interceptedReqest;
})

const getUsers = ():Promise<AxiosResponse<IUser[]>> => {
  return axiosInstance.get('/users');
}

const getUser= async (id:number):Promise<AxiosResponse<IUser>> => {
  return await axiosInstance.get('/users/'+id);
}

export {
  getUsers,
  getUser,
}