import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import style from './Favorites.module.css';

export default function Favorites(props) {
    const myFavorites = useSelector( (s) => s.myFavorites );
    const characters = props.characters.filter( (e) => {
        return myFavorites.includes(e.id)
    } );
    let id = 0;
    return (
        <>
            <div className={style.cards}>
                {characters.map((card) => {
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
                })}
            </div>
        </>
    )
}
