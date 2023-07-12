import Navsearch from './navsearch.js';
import { useEffect,useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce.js'

import bookIcon from './static/books_1.svg';
import homeIcon from './static/home.svg';
import searchIcon from './static/search.svg';
import notificationIcon from './static/notification.svg';
import bookIcon2 from './static/books_2.svg';
import discussionIcon from './static/discussion.svg';
import profileIcon from './static/profile.svg';

import navbarCSS from '../styles/navbar.module.css';

function Navbar( {search, setSearch, coverVal, bookTitle, authorName, onClick,
    setData,
    setBookTitle,
    setCoverVal,
    setAuthorName
} ){


    const history = useHistory();
    const location = useLocation();

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

    useEffect(() =>{
        if(location.pathname === '/'){

            console.log('path changed')
            window.location.reload()
        }
    }, [location])


    return (

        <nav>
            <div className={`${navbarCSS.nav_container} ${navbarCSS.clearfix}`}>

                <h1 className={`${navbarCSS.title}`}>
                    <Link to='/home' className={navbarCSS.link}>
                    <img src={bookIcon} alt="logo" className={navbarCSS.img}/>
                    BookClub
                    </Link>
                </h1>
                    
                <h2 className={`${navbarCSS.nav_items}`}>
                    <Link to='/home' className={navbarCSS.link}>
                    <img src={homeIcon} alt="logo" className={`${navbarCSS.img} ${navbarCSS.img_navigation}`} />
                    Home
                    </Link>
                </h2>

                <h2 className={`${navbarCSS.nav_items}`}>
                    <Link to='#' className={navbarCSS.link}>
                    <img src={searchIcon} alt="logo" className={`${navbarCSS.img} ${navbarCSS.img_navigation}`} />
                    Explore
                    </Link>
                </h2>

                {/* <Navsearch className={navbarCSS.searchBar}
                    search={search}
                    setSearch={setSearch}
                    coverVal={coverVal}
                    bookTitle={bookTitle}
                    authorName={authorName}
                    onClick={onClick}
                /> */}

                <h2 className={`${navbarCSS.nav_items}`}>
                    <img src={notificationIcon} alt="logo" className={`${navbarCSS.img} ${navbarCSS.img_navigation}`} />
                    <Link to='#' className={navbarCSS.link}>
                    Notifications
                    </Link>
                </h2>

                <h2 className={`${navbarCSS.nav_items}`}>
                    <Link className={navbarCSS.link} to='/books'>
                    <img src={bookIcon2} alt="logo" className={`${navbarCSS.img} ${navbarCSS.img_navigation}`} />    
                    Books</Link>
                </h2>
                    
                <h2 className={`${navbarCSS.nav_items}`}>
                    <Link className={navbarCSS.link} to='/discussion'>
                    <img src={discussionIcon} alt="logo" className={`${navbarCSS.img} ${navbarCSS.img_navigation}`} />    
                    Discussion</Link>
                </h2>

                <h2 className={`${navbarCSS.nav_items}`}>
                    <Link to='/profile' className={navbarCSS.link}>
                    <img src={profileIcon} alt="logo" className={`${navbarCSS.img} ${navbarCSS.img_navigation}`} />
                    profile</Link>
                </h2>

                <h2 className={`${navbarCSS.nav_items}`}>
                        <Link to='/' className={navbarCSS.link} onClick={() => {
                        localStorage.removeItem('userUniqueId');
                    }}>signout</Link>
                </h2>
            </div>
        </nav>

    );
}

export default Navbar;


