import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

const SingleContactPage = () => {

  const {id} = useParams()

  const {state:{contact:item}} = useLocation();
  console.log(item)

  const [contact, setContact] = useState<any>({})


  useEffect(() => {
    if (item) {
      setContact(item)
    } else {
      fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(res => res.json())
        .then(user => {
          setContact(user)
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