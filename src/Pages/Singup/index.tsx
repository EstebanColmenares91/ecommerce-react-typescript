import React from 'react'
import { createUser } from '../../services/users';

export function SingUp() {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser({
      name: '',
      email: '',
      password: '',
      avatar: ''
    })

    createUser(user)
  };
  return (
    <div>
      <h1>SingUp</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="SingUp" />
      </form>
    </div>
  )
}
