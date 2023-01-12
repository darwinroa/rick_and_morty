import './Search.module.css';
import { useState } from 'react';

export default function SearchBar(props) {
   const [character, setCharacter] = useState('');
   function handleInput(event) {
      setCharacter(event.target.value);
   }
   return (
      <div>
         <input type='text' name='search' placeholder='Type ID' onChange={(e) => handleInput(e)} value={character} />
         <button onClick={() => props.onSearch(character) }>Agregar</button>
      </div>
   );
}