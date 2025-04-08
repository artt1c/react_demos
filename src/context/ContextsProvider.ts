import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {createContext, useContext} from "react";

type StoreType = {
  userStorage: {
    allUsers: IUser[];
    setFavoriteUser: (obj:IUser) => void;
  },
  postStore: {
    allPosts: IPost[];
  }
}

const defaultValue:StoreType = {
  userStorage: {
    allUsers:[],
    setFavoriteUser: () => {}
  },
  postStore: {
    allPosts:[]
  }
}

export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = ():StoreType => useContext(Context);
