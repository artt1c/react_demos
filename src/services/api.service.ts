import axios, {AxiosResponse} from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IUserContact} from "../models/IUserContact";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {"Content-Type": "application/json"},
});

const userApiService = {
  getAllUsers: ():Promise<AxiosResponse<IUserContact[]>> => {
    return axiosInstance.get<IUserContact[]>(urls.users.allUsers);
  },
  getUserById: (id:string):Promise<AxiosResponse<IUserContact>> => {
    return axiosInstance.get<IUserContact>(urls.users.byId(id))
  }
}

export {
  userApiService,
}