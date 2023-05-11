import Navsearch from './navsearch.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce.js'

import navbarCSS from '../styles/navbar.module.css';

function Navbar( {search, setSearch, coverVal, bookTitle, authorName, onClick,
    setData,
    setBookTitle,
    setCoverVal,
    setAuthorName
} ){

    const newSearch = useDebounce(search.replace(/\s+/g, "+"));

    useEffect(() => {
        const data = async () => {
        const response = await fetch(`https://openlibrary.org/search.json?title=${newSearch}`)
        const data = await response.json();
        setData(data);
        return data;
        }
        data().then(data => {
            data = data.docs;
            // console.log(data)
            setBookTitle(data[0].title);
            setAuthorName(data[0].author_name[0]);
            setCoverVal(`https://covers.openlibrary.org/b/isbn/${data[0].isbn[0]}-M.jpg`);
        });
    },[newSearch])


    return (
        <nav>
            <div className={navbarCSS.NavLinks}>
                {/*<h1 className={navbarCSS.h1}>BookClub</h1>*/}
                <Link className={navbarCSS.h1} to='/home'><h1>BookClub</h1></Link>

                <Link className={navbarCSS.navlink} to='/books'>books</Link>
                <Link className={navbarCSS.navlink} to='/discussion'>discussion</Link>
                <Navsearch className={navbarCSS.navlink}
                    search={search}
                    setSearch={setSearch}
                    coverVal={coverVal}
                    bookTitle={bookTitle}
                    authorName={authorName}
                    onClick={onClick}
                />
                <Link className={navbarCSS.navlink} to='/profile'>profile</Link>
            </div>
        </nav>
    );
}

export default Navbar;