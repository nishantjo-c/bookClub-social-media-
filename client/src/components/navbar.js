import Navsearch from './navsearch.js';
// import {useState} from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Books from './pages/books.js';
import Discussion from './pages/discussion.js';
import Profile from './pages/profile.js';
import navbarCSS from '../styles/navbar.module.css';

function Navbar( {search, setSearch, coverVal, bookTitle, authorName, onClick} ){


    return (
    <Router>
        <nav>
            <div className={navbarCSS.NavLinks}>
                <h1>BookClub</h1>

                <NavLink className={navbarCSS.navlink} to='/books'>books</NavLink>
                <NavLink className={navbarCSS.navlink} to='/discussion'>discussion</NavLink>
                <Navsearch className={navbarCSS.navlink}
                    search={search}
                    setSearch={setSearch}
                    coverVal={coverVal}
                    bookTitle={bookTitle}
                    authorName={authorName}
                    onClick={onClick}
                />
                <NavLink className={navbarCSS.navlink} to='/profile'>profile</NavLink>
            </div>
        </nav>
        <Route exact path='/books' component={Books} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/discussion' component={Discussion} />
    </Router>
    );
}

export default Navbar;