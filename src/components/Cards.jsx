import Card from './Card';
import s from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   let id = 0;
   return ( 
      <>
         <div className={s.cards}>
            { characters.map( (card) => {
               id++;
               return (
                  <Card
                     name={card.name}
                     species={card.species}
                     gender={card.gender}
                     image={card.image}
                     id={card.id}
                     onClose={() => props.onClose(card.id)}
                     key={id}
                  />
               );            
            } ) }
         </div>
      </>
   );
}
