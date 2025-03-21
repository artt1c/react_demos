import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {IContact} from "../../models/IContact";

type IProps = {
  contact: IContact;
}

const ContactComponent:FC<IProps> = ({contact}) => {

  const navigateFunction = useNavigate();

  const onClickNavigateHandler = ()=> {
    navigateFunction(contact.id.toString(), {state: {contact}});
  }

  return (
    <div>
      {contact.email} <NavLink to={contact.id.toString()} state={{contact}}>details</NavLink>

      -or-

      <button onClick={onClickNavigateHandler}>Details by btn</button>
    </div>
  );
};

export default ContactComponent;