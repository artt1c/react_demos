import React, {FC, useEffect, useState} from 'react';
import ContactComponent from "../contact/ContactComponent";
import {IUserContact} from "../../models/IUserContact";
import {userApiService} from "../../services/api.service";

const ContactsComponent:FC = () => {

  const [contacts, setContacts] = useState<IUserContact[]>([])

  useEffect(() => {
    userApiService
      .getAllUsers()
      .then(value => setContacts(value.data))
  }, []);

  return (
    <div>
      {
        contacts.map((contact, i) => (
          <ContactComponent key={i} contact={contact} />
        ))
      }
    </div>
  );
};

export default ContactsComponent;