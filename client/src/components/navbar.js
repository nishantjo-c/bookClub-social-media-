import Navsearch from './navsearch.js';
import {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Navbar( {search, setSearch, coverVal, bookTitle, authorName, onClick} ){


    return (
    <div>
        <nav>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>books</a></li>
                <li><a href='#'>groups</a></li>
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