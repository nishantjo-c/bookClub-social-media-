import navbarCSS from '../styles/navbar.module.css';

function Navsearch({search, setSearch, coverVal, bookTitle, authorName, onClick}){
	return(
	<>
	<div className='navSearch'>
        <input 
            className='searchBar'
            type="text" 
            placeholder='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 0 &&
            <div className={navbarCSS.searchSuggestion} onClick={onClick}>
	            <img className={navbarCSS.imageNav} src={coverVal} alt="no image yet!" />
	                <div>
	                    <h2 className={navbarCSS.titleNav}>{bookTitle}</h2>
	                    <p className={navbarCSS.authNav}>by {authorName}</p>
	                </div>
	    	</div>}
    </div>
	</>
	);
}

export default Navsearch;