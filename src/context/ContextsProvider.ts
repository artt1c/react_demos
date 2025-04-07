import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {createContext, useContext} from "react";

type StoreType = {
  userStorage: {
    allUsers: IUser[];
  },
  postStore: {
    allPosts: IPost[];
  }
}

const defaultValue:StoreType = {
  userStorage: {
    allUsers:[]
  },
  postStore: {
    allPosts:[]
  }
}

export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = ():StoreType => useContext(Context);
