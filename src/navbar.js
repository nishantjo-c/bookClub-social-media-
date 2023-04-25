import navbarCSS from './styles/navbar.module.css';

function Navbar( {search, setSearch, coverVal, bookTitle, authorName, onClick} ){

    return (
    <div>
        <nav>
            <ul>
                <li><a href='#'>home</a></li>
                <li><a href='#'>books</a></li>
                <li><a href='#'>groups</a></li>
                    <div className='navSearch'>
                        <input 
                            className='searchBar'
                            type="text" 
                            placeholder='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            />
                         <div className={navbarCSS.searchSuggestion} onClick={onClick}>
                                <img className={navbarCSS.imageNav} src={coverVal} alt="no image yet!" />
                                    <div>
                                        <h2 className={navbarCSS.titleNav}>{bookTitle}</h2>
                                        <p className={navbarCSS.authNav}>by {authorName}</p>
                                    </div>
                            </div> 
                    </div>
                <li><a href='#'>profile</a></li>
            </ul>
        </nav>
    </div>
    );
}

export default Navbar;