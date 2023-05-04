import Navsearch from './navsearch.js';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Navbar( {search, setSearch, coverVal, bookTitle, authorName, onClick} ){


    return (
    <div>
        <nav>
            <ul>
                <h1>BookClub</h1>
                <li><a href='#'>books</a></li>
                <li><a href='#'>discussion</a></li>
                <Navsearch 
                    search={search}
                    setSearch={setSearch}
                    coverVal={coverVal}
                    bookTitle={bookTitle}
                    authorName={authorName}
                    onClick={onClick}
                />
                <li><a href='#'>profile</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;