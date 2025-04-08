import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {create} from "zustand/react";

type StoreType = {
  userStore: {
    allUsers: IUser[],
    loadingUsers: (users:IUser[]) => void,
    setFavoriteUser: (obj:IUser) => void,
    favoriteUser: IUser | null,
  },
  postStore: {
    allPosts: IPost[],
  }
}

export const useStore = create<StoreType>()(set => ({
  userStore: {
    allUsers: [],
    loadingUsers: (users:IUser[]) => {
      return set((state)=> {
        let newState:StoreType =  {
          ...state,
          userStore: {
            ...state.userStore,
            allUsers: users,
          }
        }
        console.log(newState)
        return newState;
      })
    },

    favoriteUser: null,
    setFavoriteUser: (obj:IUser) => {
      return set(state => {
        return {
          ...state,
          userStore: {
            ...state.userStore,
            favoriteUser: obj,
          }
        }
      })
    },
  },
  postStore: {
    allPosts: []
  }
}));