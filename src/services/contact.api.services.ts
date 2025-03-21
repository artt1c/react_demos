import {IContact} from "../models/IContact";

export const getContacts = async ():Promise<IContact[]> => {
  return await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
}

export const getContactById = async (id?:string):Promise<IContact> => {
  return await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(res => res.json())
}