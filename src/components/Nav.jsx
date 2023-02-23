import React from 'react';
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import { Link } from 'react-router-dom';

export default function Nav({ onSearch, logout }) {
    return (
        <div className={s.nav}>
            <div className={s.logo}>Logo</div>
            <div className={s.menu} >
                <ul>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                    <li>
                        <Link to='/' onClick={logout}>Logout</Link>
                    </li>
                </ul>
            </div>
            <div className={s.search}>
                <SearchBar
                    onSearch={(id) => onSearch(id)}
                />
            </div>
        </div>
    )
}
