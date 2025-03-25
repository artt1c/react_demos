import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IUserContact} from "../../models/IUserContact";
import {userApiService} from "../../services/api.service";
import {useAppLocation} from "../../hooks/useAppLocation";

const SingleContactPage = () => {

  const {id} = useParams<{ id:string }>();

  const {state:{contact:item}} = useAppLocation<{contact: IUserContact}>();

  const [contact, setContact] = useState<IUserContact | null>(null)


  useEffect(() => {
    if (item) {
      setContact(item)
    } else if (id){
      userApiService.getUserById(id)
        .then(value => setContact(value.data))
    } else {
      throw new Error('i fucker up')
    }
  }, [id, item]);

  return (
    <div>
      {contact && <>{contact.name} - {contact.username}</>}
    </div>
  );
};

export default SingleContactPage;