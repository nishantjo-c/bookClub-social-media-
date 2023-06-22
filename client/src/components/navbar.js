import Navsearch from './navsearch.js';
import { useEffect,useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useDebounce from '../hooks/useDebounce.js'

import navbarCSS from '../styles/navbar.module.css';

function Navbar( {search, setSearch, coverVal, bookTitle, authorName, onClick,
    setData,
    setBookTitle,
    setCoverVal,
    setAuthorName
} ){

    const [isHovered, setIsHovered] = useState(false);

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

    /*const handleClick = (e) => {
  
        if(e.target.textContent === 'signout'){
            console.log(e.target.textContent)
            // history.push('/')
        }
       }*/

    const handleMouseEnter = () => {
        setIsHovered(true);

    }

    const handleMouseLeave = () => {
        setIsHovered(false);
     }

    return (

        <nav>
            <div className={navbarCSS.NavLinks}>

                <Link className={navbarCSS.h1} to='/home'>
                    <h1>BookClub</h1>
                    {/* <img src="./static/profile.png" alt="logo" id={navbarCSS.img}/> */}
                </Link>

                <Link className={navbarCSS.navlink} to='/books'>Books</Link>
                <Link className={navbarCSS.navlink} to='/discussion'>Discussion</Link>
                <Navsearch className={navbarCSS.navlink}
                    search={search}
                    setSearch={setSearch}
                    coverVal={coverVal}
                    bookTitle={bookTitle}
                    authorName={authorName}
                    onClick={onClick}
                />
                <div className={navbarCSS.navlink} to='/profile' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                    Personal
                   {<div className={`${navbarCSS['dropdownContent']} ${isHovered ? navbarCSS.visible : ''}`} >
                        <div className={navbarCSS.h4}>
                            <Link to='/profile' className={navbarCSS.navlink}>
                                <h3>profile</h3>
                            </Link>
                        </div>
                        <div className={navbarCSS.h4}>
                            <Link to='/' className={navbarCSS.navlink} onClick={() => {
                                localStorage.removeItem('userUniqueId');
                            }}>
                                <h3>signout</h3>
                            </Link>
                        </div>
                    </div>}
                </div>
            </div>
        </nav>

    );
}

export default Navbar;


