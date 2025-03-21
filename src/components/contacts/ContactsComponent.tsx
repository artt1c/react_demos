import React, {FC, useEffect, useState} from 'react';
import ContactComponent from "../contact/ContactComponent";
import {IContact} from "../../models/IContact";
import {getContacts} from "../../services/contact.api.services";

const ContactsComponent:FC = () => {

  const [contacts, setContacts] = useState<IContact[]>([])

  useEffect(() => {
    getContacts()
      .then(users => {
        setContacts(users);
      })
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