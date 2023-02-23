import s from './Card.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, deleteFavorites } from '../redux/actions';

export default function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites =  useSelector( (s) => s.myFavorites );

   function handleFavorite (id) {
      if(isFav) {
         setIsFav(false);
         dispatch(deleteFavorites(id));
      } else {
         setIsFav(true);
         dispatch(addFavorites(id));
      }
   }

   useEffect(() => {
      myFavorites.forEach((id) => {
         if (id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   return (
      <div className={s.card}>
         <div className={s.header}>
            {
               isFav ? (
                  <button onClick={() => handleFavorite(props.id)}>❤️</button>
               ) : (
                  <button onClick={() => handleFavorite(props.id)}>🤍</button>
               )
            }
            <button className={s.btn} onClick={() => { props.onClose() }}>X</button>
         </div>
         <Link to={`/detail/${props.id}`}>
            <img src={props.image} alt={props.image} />
            <h2 className={s.name}>{props.name}</h2>
         </Link>
         <div className={s.footer}>
            <h3>{props.species}</h3>
            <h3>{props.gender}</h3>
         </div>
      </div>
   );
}
