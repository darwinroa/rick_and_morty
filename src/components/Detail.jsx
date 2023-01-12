import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import s from './Detail.module.css';

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  console.log('Estos son los datos que se traen: ', character);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("Hola, No hay personajes con ese detailId");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  return (
    <div>
      <Link to='/home' className={s.btn}>Back to Home</Link>
      <h2>Nombre: {character.name}</h2>
      <div className={s.detailContainer}>
        <div>
          <ul>
            <li>Status: {character.status}</li>
            <li>Especie: {character.species}</li>
            <li>Género: {character.gender} </li>
            <li>Origin: {character.origin?.name} </li>
          </ul>
        </div>
        <div>
          <img src={character.image} alt={character.name} />
        </div>
      </div>
    </div>
  )
}
