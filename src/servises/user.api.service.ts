import IUser from "../model/IUser";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const getUsers= ():Promise<IUser[]> => {
  return fetch(baseUrl)
    .then(res => res.json())
}

const getUser = (id:number):Promise<IUser> => {
  return fetch(baseUrl + '/' + id)
    .then(res => res.json())
}

export {
  getUsers,
  getUser
};