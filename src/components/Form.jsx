import React from 'react'
import validation from './validation';
// import { Link } from 'react-router-dom'


export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = React.useState({
    username: '',
    password: ''
  });

  function handleChange(evento) {
    setUserData({
      ...userData,
      [evento.target.name]: evento.target.value,
    });   
    
    setErrors(validation({
      ...userData,
      [evento.target.name]: evento.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.login(userData);
  }

  return (
    <div>
      <form onSubmit={((e) => {handleSubmit(e)})}>
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name='username'
          placeholder='Enter Username'
          value={userData.username}
        />
        <p>{errors.username}</p>
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name='password'
          placeholder='Enter Password'
          value={userData.password}
        />
        <p>{errors.password}</p>
        { Object.keys(errors).length === 0 ? <button type='submit'>Login</button> : <button type='submit' disabled>Login</button> }
          
      </form>
    </div>
  )
}
