import axios from "axios";
import {IUserWithTokens} from "../models/IUserWithTokens";
import {IProduct} from "../models/IProduct";
import {retriveLocalStorage} from "../components/helpers/helpers";
import {IBaseResponse} from "../models/IBaseResponse";
import {ITokenPair} from "../models/ITokenPair";

const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com/auth',
  headers: {}
});

axiosInstance.interceptors.request.use(request => {
  console.log(request?.method?.toUpperCase());
  if (request.method?.toUpperCase() === 'GET') {
    request.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
  }

  return request;
})

const login = async ():Promise<IUserWithTokens> => {
  const {data:userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
    username: 'emilys',
    password: 'emilyspass',
    expiresInMins: 1,
  });

  localStorage.setItem('user', JSON.stringify(userWithTokens));
  return userWithTokens;
}

const loadAuthProducts = async ():Promise<IProduct[]> => {

  const {data} = await axiosInstance.get<IBaseResponse & { products:IProduct[] }>('/products', {
    headers: {
      // Authorization: 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
  });

  return data.products;
}

const refresh = async () => {
  console.log('refresh');
  const userWithTokens = retriveLocalStorage<IUserWithTokens>('user');
  const {data} = await axiosInstance.post<ITokenPair>('/refresh', {
    refreshToken:  userWithTokens.refreshToken,
    expiresInMins: 1,
  });
  userWithTokens.refreshToken = data.refreshToken
  userWithTokens.accessToken = data.accessToken

  localStorage.setItem('user', JSON.stringify(userWithTokens));
}

export {
  login,
  loadAuthProducts,
  refresh
}