import React, {FormEvent, useState} from 'react';

interface FormProps {
  username: string;
  password: string;
}

const FormComponent = () => {

  const [formState, setFormState] = useState<FormProps>({
    username: 'defaultUsername',
    password: '1111',
  })

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let user = {
      username: formState.username,
      password: formState.password,
    }
    console.log(user);

  };

  // const handleUsernameChange = (e:FormEvent<HTMLInputElement>) => {
  //   const input = e.target as HTMLInputElement
  //   console.log(input.value);
  //   setFormState({...formState, username: input.value});
  // };
  //
  // const handlePasswordChange = (e:FormEvent<HTMLInputElement>) => {
  //   const input = e.target as HTMLInputElement;
  //   console.log(input.value);
  //   setFormState({...formState, password: input.value});
  // };

  const handleInputChange = (e:FormEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement
      console.log(input.value);
      setFormState({...formState, [input.name]: input.value});
    };

  return (
    <div>
      <form onSubmit={handleSubmit}>Username
        <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
        <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
        <button>send</button>
      </form>
    </div>
  );
};

export default FormComponent;