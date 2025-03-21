import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {getContactById} from "../../services/contact.api.services";

const SingleContactPage = () => {

  const {id} = useParams<{ id:string }>();

  const {state:{contact:item}} = useLocation();

  const [contact, setContact] = useState<any>({})


  useEffect(() => {
    if (item) {
      setContact(item)
    } else {
      getContactById(id)
        .then(user => {
          setContact(user);
        })
    }
  }, [id, item]);

  return (
    <div>
      {contact.name} - {contact.username}
    </div>
  );
};

export default SingleContactPage;