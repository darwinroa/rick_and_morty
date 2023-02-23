import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Form from './components/Form';
import Detail from './components/Detail';
import Favorites from './components/Favorites';
// import characters from './data.js';

function App () {
  const [characters, setCharacters] = useState( [] );
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ateamdev.darwinmr@gmail.com' ;
  const password = '1DMRM1';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  function logout() {
      setAccess(false);
      navigate('/');
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  
  // function onSearch () {
  //   setCharacters([
  //     ...characters,
  //   {
  //     name: 'Morty Smith',
  //     species: 'Human',
  //     gender: 'Male',
  //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //   }])
  // }

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            let exist = characters.find((e) => e.id === data.id);
            if (exist) {
               alert('El Personaje que desea agregar ya existe');
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  function onClose(id) {
    setCharacters( (characters) => {
      return characters.filter((e) => e.id !== id);
    } )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      { useLocation().pathname === '/' ? null : <Nav logout={logout} onSearch={onSearch} /> }
      <Routes>
        <Route path='/' element={ <Form login={login} /> } ></Route>
        <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />  }></Route> 
        <Route path='/about' element={ <About /> } ></Route>
        <Route path='/favorites' element={ <Favorites characters={characters} onClose={onClose} /> } ></Route>
        <Route path='/detail/:detailId' element={ <Detail /> } ></Route>
      </Routes>
    </div>
  )
}

export default App
