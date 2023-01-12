import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={s.card}>
         <div className={s.header}>
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
