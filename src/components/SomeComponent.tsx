import React from "react";

interface User {
  id:number,
  name:string
}

type MyType = {
  users: User[]
}

class SomeComponent extends React.Component<{}, MyType> {

  state: MyType = {
    users: []
  }

  componentDidMount() {
    console.log('mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(value => {
        this.setState({users: value})
      })
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<MyType>, snapshot?: any) {
    console.log('update')
    console.log(prevState)
  }

  render() {
    return (
      <ul>
        {
          this.state.users.map((user: User) => (<li key={user.id}>{user.name}</li>))
        }
      </ul>
    );
  }


}

export default SomeComponent